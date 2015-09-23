com.castis.Loder.importJavascript("app/service/UrlCreater.js");
com.castis.Loder.importJavascript("app/model/Category.js");
com.castis.Loder.importJavascript("app/service/JsonDataParser.js");

var com;
if (!com) com = {};
if (!com.sryu) com.sryu = {};
if (!com.sryu.view) com.sryu.view = {};
if (com.sryu.view.CategoryList) throw new Error("error");


com.sryu.view.CategoryList = function(root, categoryData){
	com.sryu.view.InnerView.apply(this, [root]);
	this.subContainer.setElementId("CategoryList");
	this.categoryData = categoryData;
	this.list = undefined;	
	this.getCategoryData(categoryData.categoryId);
};
com.sryu.view.CategoryList.prototype = new com.sryu.view.InnerView(); 
com.sryu.view.CategoryList.prototype.createView = function(){
	
	var listSize = this.dataSource.length;
	this.list = new com.castis.NormalList(this, listSize);
	this.list.createList();
	this.subContainer.addItem(this.list);	
};
com.sryu.view.CategoryList.prototype.onCreateListItem = function(index){
	return new com.castis.TextListItem();
};
com.sryu.view.CategoryList.prototype.onFillListItem = function(item, index){
	item.setText(index + ". " + this.dataSource[index].categoryName + " :: " + this.dataSource[index].leaf);
};
com.sryu.view.CategoryList.prototype.onClickListItem = function(e){
	
	
	var index = e.target.getId();
	
	var view = document.getElementById("CategoryList")._this;	
	$(view.subContainer.getElement()).removeAttr("id");
	
	if(view.dataSource[index].leaf == true)
	{	
		view.sendChangeViewEvent("AssetList", view.dataSource[index]);	
	}
	else
	{	
		view.sendChangeViewEvent("CategoryList", view.dataSource[index]);
	}
	
};
com.sryu.view.CategoryList.prototype.getCategoryData = function(categoryId){
	var url = com.sryu.service.UrlCreater.getUrlForCategoryTree(categoryId);
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
com.sryu.view.CategoryList.prototype.onSuccessReadData = function(data){
	
	var view = document.getElementById("CategoryList")._this;
	view.dataSource = com.sryu.JsonDataParser.parseCategoryTreeData(data, view.categoryData.categoryId);
	view.createView();
	
	view.sendCompleteEvent(view.categoryData.categoryName);
};
com.sryu.view.CategoryList.prototype.afterDestroy = function(){
//	this.list.destroy();
//	delete this.list;
};
com.sryu.view.CategoryList.prototype.afterRemake = function(){
	this.subContainer.setElementId("CategoryList");
//	this.subContainer.getElement()._this = this;
	this.createView();
	
};