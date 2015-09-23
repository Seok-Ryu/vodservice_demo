com.castis.Loder.importJavascript("app/references/LinkedList.js");

var com;
if (!com) com = {};
if (!com.sryu) com.sryu = {};
if (!com.sryu.service) com.sryu.service = {};
if (com.sryu.service.ViewManager) throw new Error("error");

com.sryu.service.ViewManager = function(){
	this.list = new LinkedList();
};
com.sryu.service.ViewManager.prototype.animationStart = function(){
	
	var $loadingImage = $("#loading-img");
	$loadingImage.css("left", window.innerWidth/2);
	$loadingImage.css("top", window.innerHeight/2);
	$loadingImage.show();
};
com.sryu.service.ViewManager.prototype.animationFinish = function(){
	
	$("#loading-img").hide();
};
com.sryu.service.ViewManager.prototype.add = function(data){	
	this.list.addLast(data);
};

com.sryu.service.ViewManager.prototype.getLength = function(){
	return this.list.length;
};
com.sryu.service.ViewManager.prototype.getLast = function(){
	return this.list.removelast();
};