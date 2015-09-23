
com.sryu.JsonDataParser = {};
com.sryu.JsonDataParser.parseCategoryTreeData= function(data, categoryId){
	if(data.resultCode != 100) 
	{
		throw new Error("data request fail : " + data.resultCode + " // " + data.errorString);
	}
	var categoryList = new Array();
	
	for(var i = 0, max = data.categoryList.length; i < max; i++)
	{		
		var categoryData = data.categoryList[i];
		
		var category = new com.sryu.model.Category(categoryData);
		if(category.parentCategoryId == categoryId)
		{
			categoryList.push(category);
		}
		else
		{
			//console.log("skip data cause name is null");
		}
	}
	return categoryList;
};

com.sryu.JsonDataParser.parseAssetListData= function(data){
	if(data.resultCode != 100) 
	{
		throw new Error("data request fail : " + data.resultCode + " // " + data.errorString);
	}
	
	var assetList = new Array();
	
	for(var i = 0, max = data.assetList.length; i < max; i++)
	{
		var assetData = data.assetList[i];
		
		var asset = new com.sryu.model.Asset(assetData);
		assetList.push(asset);
	};
	return assetList;
};

com.sryu.JsonDataParser.parseAssetInfo= function(data){
	if(data.resultCode != 100) 
	{
		throw new Error("data request fail : " + data.resultCode + " // " + data.errorString);
	}
	
	var asset = new com.sryu.model.Asset(data.asset);
	
	return asset;
};