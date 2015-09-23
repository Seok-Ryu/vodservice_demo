
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
if (com.castis.AlertPopup) throw new Error("error");

/**
 * 메시지와 확인 버튼이 있는 팝업
 */
com.castis.AlertPopup = function(){
	this.superclass("popup");
	com.castis.Global.addClass(this.element, "alert-popup");
};
com.castis.AlertPopup.prototype = new com.castis.Popup();
com.castis.AlertPopup.prototype.constructor = com.castis.AlertPopup;
com.castis.AlertPopup.prototype.superclass = com.castis.Popup;

com.castis.AlertPopup.prototype.init = function(){
	var itemLength = 3;
	this.container = new com.castis.VBox();
	
	for(var i=0, max=itemLength; i < max; i++)
	{		
		var item = this.getItem(i);
		this.items[i] = item;
		this.panels[i] = new com.castis.Panel();
		this.panels[i].addItem(this.items[i]);
	}
	this.layout();
};

com.castis.AlertPopup.prototype.getItem = function(index){
	switch(index)
	{
		case 0:
			this.title = new com.castis.InnerText("Message");
			return this.title;
			break;
		case 1:
			this.message =  new com.castis.Component();
			return this.message;
			break;
		case 2:
			this.buttons[0] = new com.castis.Button("OK");
			this.buttons[0].setId(0);
			this.buttons[0].setClickHandler(this.onPopupButtonHandler);
			return this.buttons[0]; 
			break;
		default:
			break;
	}
};

com.castis.AlertPopup.prototype.layout = function(){
	this.container.addItems(this.panels);
	this.addChild(this.container);
	this.setRootElement(this.targetView.root);
	this.afterLayout();
};
com.castis.AlertPopup.prototype.afterLayout = function(){
	com.castis.Global.addClass(this.panels[0].getElement(), "popup-title");
	com.castis.Global.addClass(this.panels[1].getElement(), "popup-message");
	com.castis.Global.addClass(this.panels[2].getElement(), "popup-button");
	com.castis.Global.addClass(this.items[1].getElement(), "message");
	
};
com.castis.AlertPopup.prototype.afterShow = function(){
//	this.buttons[0].getElement().focus();
	$(this.buttons[0].getElement()).focus();
};