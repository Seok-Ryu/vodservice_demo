//onload 가 되기전에 불려져야한다

com.castis.Loder.importJavascript("app/view/InnerView.js");
com.castis.Loder.importJavascript("app/view/ViewContainer.js");

com.castis.Loder.importJavascript("app/view/CategoryList.js");
com.castis.Loder.importJavascript("app/view/AssetList.js");
com.castis.Loder.importJavascript("app/view/AssetDetail.js");
com.castis.Loder.importJavascript("app/view/Player.js");
com.castis.Loder.importJavascript("app/view/SearchList.js");

com.castis.Loder.importJavascript("app/locale/ko/StringValues.js");

com.castis.Loder.importJavascript("app/service/ViewManager.js");


window.onload = function()
{	
	main();
};

function main(){
	createLoadingImg();
	var view = new com.sryu.view.ViewContainer();
	view.createView();
}

function createLoadingImg(){
	var $img = $("<img>");
	$img.attr("src","app/resources/images/ajax-loader.gif");
	
	var $div = $("<div>");
	
	$div.attr("id","loading-img");
	
	$div.append($img);
	$div.appendTo($("body:eq(0)"));
	$div.hide();
}