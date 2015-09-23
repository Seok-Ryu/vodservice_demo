
var com;
if (!com) com = {};
if (!com.sryu) com.sryu = {};
if (!com.sryu.model) com.sryu.model = {};
if (com.sryu.model.Category) throw new Error("error");

com.sryu.model.Category = function(data){
	this.categoryId = data.categoryId;
	this.parentCategoryId = data.parentCategoryId;
	this.categoryName = data.categoryName;
	this.leaf = data.leaf;
};