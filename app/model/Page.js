
var com;
if (!com) com = {};
if (!com.sryu) com.sryu = {};
if (!com.sryu.model) com.sryu.model = {};
if (com.sryu.model.Page) throw new Error("error");

com.sryu.model.Page = function(title, view, scrollPositon){
	this.title = title;
	
	this.view = view;
	this.scrollPositon = scrollPositon;
};