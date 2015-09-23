

var com;
if (!com) com = {};
if (!com.sryu) com.sryu = {};
if (!com.sryu.service) com.sryu.service = {};
if (com.sryu.service.UrlCreater) throw new Error("error");

com.sryu.service.UrlCreater = {};
com.sryu.service.UrlCreater.getUrlForCategoryTree = function(categoryId){
	var url = com.sryu.service.UrlCreater.PROXY + com.sryu.service.UrlCreater.HAS + 
			"getCategoryTree.json?" + 
			"version=" + com.sryu.service.UrlCreater.VERSION +
			"^terminalKey=" + com.sryu.service.UrlCreater.TERMINAL_KEY +
			"^transactionId=" + com.sryu.service.UrlCreater.TRANSACTION_ID +
			"^categoryProfile=4" + 
			"^categoryId=" + categoryId +
			"^depth=2";
	return url;
};
com.sryu.service.UrlCreater.getUrlForAssetList = function(categoryId, pageSize, pageIndex){
	var url = com.sryu.service.UrlCreater.PROXY + com.sryu.service.UrlCreater.HAS + 
			"getAssetList.json?" + 
			"version=" + com.sryu.service.UrlCreater.VERSION +
			"^terminalKey=" + com.sryu.service.UrlCreater.TERMINAL_KEY +
			"^transactionId=" + com.sryu.service.UrlCreater.TRANSACTION_ID +
			"^assetProfile=2" + 
			"^categoryId=" + categoryId;
	if(pageSize > 0)
	{
		url += "^pageSize=" + pageSize;
		url += "^pageIndex=" + pageIndex;
	}
	return url;
};
com.sryu.service.UrlCreater.getUrlForAssetInfo = function(assetId){
	var url = com.sryu.service.UrlCreater.PROXY + com.sryu.service.UrlCreater.HAS + 
			"getAssetInfo.json?" + 
			"version=" + com.sryu.service.UrlCreater.VERSION +
			"^terminalKey=" + com.sryu.service.UrlCreater.TERMINAL_KEY +
			"^transactionId=" + com.sryu.service.UrlCreater.TRANSACTION_ID +
			"^assetProfile=3" + 
			"^assetId=" + assetId;
	return url;
};
com.sryu.service.UrlCreater.getUrlForSearchAsset = function(searchText, pageSize, pageIndex){
	var url = com.sryu.service.UrlCreater.PROXY + com.sryu.service.UrlCreater.HAS + 
			"searchAsset.json?" + 
			"version=" + com.sryu.service.UrlCreater.VERSION +
			"^terminalKey=" + com.sryu.service.UrlCreater.TERMINAL_KEY +
			"^transactionId=" + com.sryu.service.UrlCreater.TRANSACTION_ID +
			"^assetProfile=2" + 
			"^categoryId=0" + 
			"^searchField=title" +
			"^searchKeyword=" + searchText + 
			"^searchMethod=normal" +
			"^recursive=true" +
			"^caseSensitive=false" +
			"^sortType=nameAscend" +
			"^resultType=asset";
			
	if(pageSize > 0)
	{
		url += "^pageSize=" + pageSize;
		url += "^pageIndex=" + pageIndex;
	}
	return url;
};

com.sryu.service.UrlCreater.getUrlForPurchaseAsset = function(asset){
	var url = com.sryu.service.UrlCreater.PROXY + com.sryu.service.UrlCreater.HAS + 
			"purchaseAsset.json?" + 
			"version=" + com.sryu.service.UrlCreater.VERSION +
			"^terminalKey=" + com.sryu.service.UrlCreater.TERMINAL_KEY +
			"^transactionId=" + com.sryu.service.UrlCreater.TRANSACTION_ID +
			"^assetId=" + asset.assetId + 
			"^productId=" + asset.productId + 
			"^goodId=" + asset.goodId + 
			"^categoryId=" + asset.categoryId + 
			"^purchaseTime=" + com.sryu.service.UrlCreater.getTimeStamp();
	return url;	
};
com.sryu.service.UrlCreater.getTimeStamp = function(){
	var d = new Date();

	var s =
	com.sryu.service.UrlCreater.leadingZeros(d.getFullYear(), 4) + '-' +
	com.sryu.service.UrlCreater.leadingZeros(d.getMonth() + 1, 2) + '-' +
	com.sryu.service.UrlCreater.leadingZeros(d.getDate(), 2) + ' ' +
	com.sryu.service.UrlCreater.leadingZeros(d.getHours(), 2) + ':' +
	com.sryu.service.UrlCreater.leadingZeros(d.getMinutes(), 2) + ':' +
	com.sryu.service.UrlCreater.leadingZeros(d.getSeconds(), 2);
	return s;
};
com.sryu.service.UrlCreater.leadingZeros = function(n, digits){
	var zero = '';
	n = n.toString();

	if (n.length < digits) {
	for (var i = 0; i < digits - n.length; i++)
		zero += '0';
	}
	return zero + n;
};

com.sryu.service.UrlCreater.PROXY = "proxy.jsp?req=";
com.sryu.service.UrlCreater.HAS = "http://172.16.51.104/HApplicationServer/";
com.sryu.service.UrlCreater.VERSION = "1";
com.sryu.service.UrlCreater.TERMINAL_KEY = "D170ADBAB8F41CF2874D7042FFA17E1D";
com.sryu.service.UrlCreater.TRANSACTION_ID = "155";
