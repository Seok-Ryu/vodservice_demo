
var com;
if (!com) com = {};
if (!com.sryu) com.sryu = {};
if (!com.sryu.view) com.sryu.view = {};
if (com.sryu.view.InnerView) throw new Error("error");


com.sryu.view.InnerView = function(root){
	if(root == null) return;
	this.root = root;	
	this.container = root.containers[1];
	
	
	this.subContainer = new com.castis.VBox();
	$(this.subContainer.getElement()).attr("class", "InnerView");
	this.subContainer.getElement()._this = this;
	this.hide();
	
	this.container.addItem(this.subContainer);
	
	this.stringSource = com.sryu.StringValues;
	this.dataSource = undefined;
};

com.sryu.view.InnerView.prototype.init = function(){
	/* Override */
};
com.sryu.view.InnerView.prototype.sendChangeViewEvent = function(viewName, data){
	
	var changeViewEvent = jQuery.Event("changeView");
//	changeViewEvent.currentView = this;
	changeViewEvent.nextView = viewName;
	changeViewEvent.source = data;
	$(this.subContainer.getElement()).trigger(changeViewEvent);
};
com.sryu.view.InnerView.prototype.sendCompleteEvent = function(titleText){
//	var view = document.getElementById("contents-container")._this;
	
	var completeEvent = jQuery.Event("completeLoad");
	completeEvent.titleName = titleText;	
//	completeEvent._this = view.root;
	$(this.subContainer.getElement()).trigger(completeEvent);
};
com.sryu.view.InnerView.prototype.remake = function(){
	this.subContainer = new com.castis.VBox();
	$(this.subContainer.getElement()).attr("class", "InnerView");
	this.subContainer.getElement()._this = this;
	this.container.addItem(this.subContainer);
	this.afterRemake();
};
com.sryu.view.InnerView.prototype.afterRemake = function(){
	/* override */
};
com.sryu.view.InnerView.prototype.show = function(){
	this.subContainer.show();
};
com.sryu.view.InnerView.prototype.hide = function(){
	this.subContainer.hide();
};
com.sryu.view.InnerView.prototype.destroy = function(){
//	$(this.subContainer.getElement()).remove();
	this.subContainer.destroy();
	
	this.subContainer = null;
	this.afterDestroy();
};
com.sryu.view.InnerView.prototype.afterDestroy = function(){
	/* override */
};