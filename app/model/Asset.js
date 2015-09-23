
var com;
if (!com) com = {};
if (!com.sryu) com.sryu = {};
if (!com.sryu.model) com.sryu.model = {};
if (com.sryu.model.Asset) throw new Error("error");

com.sryu.model.Asset = function(data){
	this.assetId = data.assetId;
	this.title = data.title;
	this.director = data.director;
	this.starring = data.starring;
	this.synopsis = data.synopsis;	
	this.runningTime = data.runningTime;
	this.imageFileName = data.imageFileName;
	this.reviewRatingTotal = data.reviewRatingTotal;
	this.fileName = data.fileName;
	
	this.price = data.productList[0].price;
	this.productId = data.productList[0].productId;
	this.goodId = data.productList[0].goodId;
	this.purchasedId = data.productList[0].purchasedId;
	this.purchasedTime = data.productList[0].purchasedTime;
	this.viewablePeriod = data.productList[0].viewablePeriod;
	this.categoryId = data.categoryId;
	
	
	
	if(this.price == undefined || this.price == null || this.price == 0)
	{
		this.price = 0;
	}
};