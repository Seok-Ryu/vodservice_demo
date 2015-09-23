com.castis.Loder.importJavascript("app/service/UrlCreater.js");
com.castis.Loder.importJavascript("app/model/Asset.js");
com.castis.Loder.importJavascript("app/service/JsonDataParser.js");

var com;
if (!com) com = {};
if (!com.sryu) com.sryu = {};
if (!com.sryu.view) com.sryu.view = {};
if (com.sryu.view.AssetDetail) throw new Error("error");


com.sryu.view.AssetDetail = function(root, assetData){
	com.sryu.view.InnerView.apply(this, [root]);
	this.subContainer.setElementId("AssetDetail");
	this.dataSource = assetData;
	this.isPurchased = false;
	this.getAssetData(assetData.assetId);
//	this.createView();	
	/*setTimeout(function(){
				var view = document.getElementById("AssetDetail")._this;
				return view.sendCompleteEvent(view.dataSource.title);}, 300);*/
	
//	sendCompleteEvent(this.dataSource.title);
};
com.sryu.view.AssetDetail.prototype = new com.sryu.view.InnerView();
com.sryu.view.AssetDetail.prototype.createView = function(){
	this.createInfoArea();
	this.createPurchaseArea();
};

com.sryu.view.AssetDetail.prototype.createInfoArea = function(){	
	var container = new com.castis.HBox();
	container.setElementId("info-area");
	
	var poster = new com.castis.Icon(this.dataSource.imageFileName);
	poster.setOnError("app/resources/images/empty1.png");
	var info = new com.castis.MultiLineText();
	var infoString = this.stringSource.Asset_Title + " : " + this.dataSource.title + 
					"<br>" + this.stringSource.Asset_Director + " : " + this.dataSource.director + 
					"<br>" + this.stringSource.Asset_Starring + " : " + this.dataSource.starring +
					"<br>" + this.stringSource.Asset_RunningTime + " : " + this.dataSource.runningTime;
	
	if(this.dataSource.reviewRatingTotal < 1)
	{
		infoString += "<br>" + this.stringSource.Asset_ReviewRatingTotal + " : " + this.stringSource.Asset_ReviewRatingZero;
	}
	else
	{
		infoString += "<br>" + this.stringSource.Asset_ReviewRatingTotal + " : " + this.dataSource.reviewRatingTotal;
	}
					
	info.setText(infoString);
	var synopsis = new com.castis.MultiLineText(this.dataSource.synopsis);
	container.addItems([poster, info]);
	
	this.subContainer.addItems([container, synopsis]);
};
com.sryu.view.AssetDetail.prototype.createPurchaseArea = function(){	
	var price = new com.castis.InnerText(this.stringSource.Asset_Price + " : " + this.dataSource.price);
	price.setColor("#ff0000");
	
	var button = new com.castis.Button(this.stringSource.Asset_Purchase);
	button.setUiType(com.castis.Button.UI_TYPE_CONFIRM);
	button.setIconUrl("app/resources/images/card2.png");
	button.setClickHandler(this.onClickPurchase);
	if(this.dataSource.purchasedTime.length > 1)
	{
		price.setText(this.stringSource.Asset_ViewablePeriod + " : " + this.dataSource.viewablePeriod);
		button.setText(this.stringSource.Asset_Play);
	}
	else if(this.dataSource.price == 0)
	{
		button.setText(this.stringSource.Asset_Play);
		this.isPurchased = true;
	}
	
	this.subContainer.addItems([price, button]);
};
com.sryu.view.AssetDetail.prototype.onClickPurchase = function(e){
	
	var view = document.getElementById("AssetDetail")._this;
	
	//이미 구매한 경우
	if(view.dataSource.purchasedTime.length > 1 || view.isPurchased)
	{
		//바로 플레이로
		view.sendChangeViewEvent("Player", view.dataSource);
	}
	else
	{
		var viewContainer = document.getElementById("ViewContainer")._this;
		viewContainer.popupManager.showPopup(0);	
	}
	
};
com.sryu.view.AssetDetail.prototype.getAssetData = function(assetId){
	var url = com.sryu.service.UrlCreater.getUrlForAssetInfo(assetId);
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

com.sryu.view.AssetDetail.prototype.onSuccessReadData = function(data){
	var view = document.getElementById("AssetDetail")._this;
	view.dataSource = com.sryu.JsonDataParser.parseAssetInfo(data);
	if(view.isPurchased)
	{
		view.sendChangeViewEvent("Player", view.dataSource);
	}
	else
	{
		view.createView();
		view.sendCompleteEvent(view.dataSource.title);
	}
	
};
com.sryu.view.AssetDetail.prototype.confirmPurchase = function(){
	var url = com.sryu.service.UrlCreater.getUrlForPurchaseAsset(this.dataSource);
	$.ajax({
            url: url,
            async: false,
            dataType: 'jsonp',
            type: 'post',
            success: this.onSuccessPurchase,
            error: function (result) {
                alert("에러 : " + result.status + ' ' + result.statusText);
            }
        });
	return false;
};
com.sryu.view.AssetDetail.prototype.onSuccessPurchase = function(data){
	if(data.resultCode != 100) 
	{
		throw new Error("data request fail : " + data.resultCode + " // " + data.errorString);
	}
	var view = document.getElementById("AssetDetail")._this;
	view.isPurchased = true;
	view.getAssetData(view.dataSource.assetId);
	
//	view.sendChangeViewEvent("Player", view.dataSource);
};
com.sryu.view.AssetDetail.prototype.afterDestroy = function(){
//	this.list.destroy();
//	delete this.list;
};
com.sryu.view.AssetDetail.prototype.afterRemake = function(){
	this.subContainer.setElementId("AssetDetail");
//	this.subContainer.getElement()._this = this;
	this.createView();
	
};