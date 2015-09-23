com.castis.Loder.importJavascript("app/service/UrlCreater.js");
com.castis.Loder.importJavascript("app/model/Asset.js");
com.castis.Loder.importJavascript("app/service/JsonDataParser.js");

var com;
if (!com) com = {};
if (!com.sryu) com.sryu = {};
if (!com.sryu.view) com.sryu.view = {};
if (com.sryu.view.AssetList) throw new Error("error");

com.sryu.view.AssetList = function(root, categoryData){
	com.sryu.view.InnerView.apply(this, [root]);
	this.subContainer.setElementId("AssetList");
	this.categoryData = categoryData;
	this.list = undefined;
	this.pager = undefined;	
	this.getAssetData(categoryData.categoryId, 0);
};
com.sryu.view.AssetList.prototype = new com.sryu.view.InnerView(); 
com.sryu.view.AssetList.prototype.createView = function(){
	var listSize = this.dataSource.length;
	this.list = new com.castis.NormalList(this, listSize);
	this.list.createList();
	this.subContainer.addItem(this.list);
};
com.sryu.view.AssetList.prototype.createCustomItem = function(){	
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
com.sryu.view.AssetList.prototype.onCreateListItem = function(index){
	return this.createCustomItem();
};
com.sryu.view.AssetList.prototype.onFillListItem = function(item, index){	
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
	if(this.dataSource[index].reviewRatingTotal > 0)
	{
		rating.setText(this.dataSource[index].reviewRatingTotal + "");	
	}			
};
com.sryu.view.AssetList.prototype.onClickListItem = function(e){	
	var index = e.target.getId();
	
	var view = document.getElementById("AssetList")._this;	
	
	view.sendChangeViewEvent("AssetDetail", view.dataSource[index]);
};
com.sryu.view.AssetList.prototype.getAssetData = function(categoryId, pageNumber){
	var url = com.sryu.service.UrlCreater.getUrlForAssetList(categoryId, com.sryu.view.AssetList.LIST_MAX_SIZE, pageNumber);
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

com.sryu.view.AssetList.prototype.onSuccessReadData = function(data){
	
	var view = document.getElementById("AssetList")._this;
	view.dataSource = com.sryu.JsonDataParser.parseAssetListData(data);
	view.createView();
	/*if(contents.pager == null)
	{
		contents.createPager(data.totalPage);	
	}*/
	
	view.sendCompleteEvent(view.categoryData.categoryName);
};

com.sryu.view.AssetList.prototype.afterDestroy = function(){
//	this.list.destroy();
//	delete this.list;
};
com.sryu.view.AssetList.prototype.afterRemake = function(){
	this.subContainer.setElementId("AssetList");
//	this.subContainer.getElement()._this = this;
	this.createView();
	
};
com.sryu.view.AssetList.LIST_MAX_SIZE = 20;