com.castis.Loder.importJavascript("app/service/UrlCreater.js");
com.castis.Loder.importJavascript("app/model/Asset.js");
com.castis.Loder.importJavascript("app/service/JsonDataParser.js");

var com;
if (!com) com = {};
if (!com.sryu) com.sryu = {};
if (!com.sryu.view) com.sryu.view = {};
if (com.sryu.view.SearchList) throw new Error("error");


com.sryu.view.SearchList = function(root){
	com.sryu.view.InnerView.apply(this, [root]);
	this.subContainer.setElementId("SearchList");

	this.list = undefined;
	this.pager = undefined;
	this.inputText = undefined;
	this.searchText = undefined;
	this.bySearch = false;
	this.createView();	
	setTimeout(function(){
				var view = document.getElementById("SearchList")._this;
				return view.sendCompleteEvent(view.stringSource.SearchView_Title);}, 50);
//	this.getSearchData();
};

com.sryu.view.SearchList.prototype = new com.sryu.view.InnerView();

com.sryu.view.SearchList.prototype.createView = function(){
	this.createSearchBar();	
//	this.createList();
};

com.sryu.view.SearchList.prototype.createSearchBar = function(){
	var button = new com.castis.Button();
	button.setIconUrl(this.stringSource.SearchView_Search_Icon);
	button.setClickHandler(this.onClickSearch);
	button.hideText();

	this.inputText = new com.castis.InputText(com.castis.InputText.TYPE_TEXT);
	this.inputText.setPlaceHolder(this.stringSource.SearchView_Search_PlaceHolder);
	
	var box = new com.castis.HBox();
	box.addItems([new com.castis.Panel(this.inputText), new com.castis.Panel(button)]);
	box.setElementId("search-bar");
	
	var spacer = new com.castis.Spacer();
	
	this.subContainer.addItems([box, spacer]);
};
com.sryu.view.SearchList.prototype.beforeCreateList = function(){
	if(this.list)
	{
		this.list.destroy();
	}
	if(this.emptyList)
	{
		this.emptyList.destroy();
	}
};
com.sryu.view.SearchList.prototype.createList = function(){
	
	this.beforeCreateList();
	var listSize = this.dataSource.length;
	if(listSize == 0)
	{
		this.emptyList = new com.castis.InnerText("검색결과 없음");
		this.subContainer.addItem(this.emptyList);
		return;
	}
	this.list = new com.castis.NormalList(this, listSize);
	this.list.createList();
	this.subContainer.addItem(this.list);
};
com.sryu.view.SearchList.prototype.createPager = function(pageSize){
	if(this.pager)
	{
		$(this.pager.getElement()).unbind();
		this.pager.destroy();
	}
	
	//page가 1페이지라면 페이저가 필요없다
	if(pageSize < 2) return;
	

	this.pager = new com.castis.NumberPager(pageSize);
	this.pager.setClickHandler(this.onClickPager);
	this.subContainer.addItem(this.pager);
};

com.sryu.view.SearchList.prototype.createCustomItem = function(){	
	var box = new com.castis.HBox();
	var panels = new Array();
	
	panels[0] = new com.castis.Panel(new com.castis.Icon());
	panels[1] = new com.castis.Panel(function(){
										var box = new com.castis.VBox();
										var panels = new Array();
										panels[0] = new com.castis.Panel(new com.castis.InnerText());
										panels[1] = new com.castis.Panel(function(){
																			var box = new com.castis.HBox();
																			var panels = new Array();
																			panels[0] = new com.castis.Panel(new com.castis.InnerText());
																			panels[1] = new com.castis.Panel(new com.castis.InnerText());
																			box.addItems(panels);
																			return box;
																		}());
										box.addItems(panels);
										return box;
									}());
	
	box.addItems(panels);
	
	var item =  new com.castis.CustomListItem();
	item.setCustomBox(box);
	return item;
};
com.sryu.view.SearchList.prototype.onCreateListItem = function(index){
	return this.createCustomItem();
};
com.sryu.view.SearchList.prototype.onFillListItem = function(item, index){	
	var box = item.getCustomBox();
//	
	var icon = box.getChilds()[0].getChild();
	icon.setUrl(this.dataSource[index].imageFileName);
//	icon.setUrl("app/resources/images/Koala.jpg");
	icon.setOnError("app/resources/images/empty1.png");
	
	var infobox = box.getChilds()[1].getChild();
	var titleText = infobox.getChilds()[0].getChild();
	titleText.setText(this.dataSource[index].title);
	
	var price = infobox.getChilds()[1].getChilds()[0].getChilds()[0].getChild();
	price.setText(this.dataSource[index].price + " " + com.sryu.StringValues.AssetView_Won);	
	
	var rating = infobox.getChilds()[1].getChilds()[0].getChilds()[1].getChild();
	rating.setText(this.dataSource[index].reviewRatingTotal + "");		
};
com.sryu.view.SearchList.prototype.onClickListItem = function(e){	
	var index = e.target.getId();
	console.log(index)
	var view = document.getElementById("SearchList")._this;	
	
	view.sendChangeViewEvent("AssetDetail", view.dataSource[index]);
};
com.sryu.view.SearchList.prototype.onClickPager = function(e){
//	console.log(e.pageNumber);
	var view = document.getElementById("SearchList")._this;
	view.getSearchData(view.inputText.getValue(), e.pageNumber-1);
};
com.sryu.view.SearchList.prototype.onClickSearch = function(e){
	var view = document.getElementById("SearchList")._this;
//	console.log(contents.inputText.getValue())
	view.bySearch = true;
	view.getSearchData(view.inputText.getValue(), 0);
};
com.sryu.view.SearchList.prototype.getSearchData = function(searchText, pageNumber){
	this.root.viewManagers[this.root.tabState].animationStart();
	
	var url = com.sryu.service.UrlCreater.getUrlForSearchAsset(searchText, com.sryu.view.SearchList.LIST_MAX_SIZE, pageNumber);
	$.ajax({
            url: url,
            async: true,
            dataType: 'jsonp',
            type: 'post',
            success: this.onSuccessReadData,
            error: function (result) {
                alert("에러 : " + result.status + ' ' + result.statusText);
            }
        });
};

com.sryu.view.SearchList.prototype.onSuccessReadData = function(data){
	var view = document.getElementById("SearchList")._this;
	view.dataSource = com.sryu.JsonDataParser.parseAssetListData(data);
	view.createList();
	
	if(view.bySearch)
	{
		view.createPager(data.totalPage);
//		view.inputText.clearText();
	}
	else
	{
		$(view.pager.getElement()).appendTo($(view.subContainer.getElement()));
	}
	view.bySearch = false;
	view.root.viewManagers[view.root.tabState].animationFinish();
//	view.sendCompleteEvent(view.stringSource.SearchView_Title);
};

com.sryu.view.SearchList.prototype.afterDestroy = function(){

};
com.sryu.view.SearchList.prototype.afterRemake = function(){
	this.subContainer.setElementId("SearchList");
	this.createView();
	this.createList();
};
com.sryu.view.SearchList.LIST_MAX_SIZE = 20;