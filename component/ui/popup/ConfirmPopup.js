
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
/**
 * yes no 선택을 할 수있는 팝업
 */
if (com.castis.ConfirmPopup) throw new Error("error");
com.castis.ConfirmPopup = function(){
	this.superclass("popup");
	com.castis.Global.addClass(this.element, "confirm-popup");
};
com.castis.ConfirmPopup.prototype = new com.castis.Popup();
com.castis.ConfirmPopup.prototype.constructor = com.castis.ConfirmPopup;
com.castis.ConfirmPopup.prototype.superclass = com.castis.Popup;


com.castis.ConfirmPopup.prototype.init = function(){
	var itemLength = 3;
	this.container = new com.castis.VBox();
	
	for(var i=0, max=itemLength; i < max; i++)
	{		
		var item = this.getItem(i);
		this.items[i] = item;
		this.panels[i] = new com.castis.Panel(this.items[i]);
	}
	this.layout();
};

com.castis.ConfirmPopup.prototype.getItem = function(index){
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
			var box = new com.castis.HBox();
			this.createButtonBox(box);
			return box;
			break;
		default:
			break;
	}
};



com.castis.ConfirmPopup.prototype.layout = function(){
	com.castis.AlertPopup.prototype.layout.apply(this);
};

com.castis.ConfirmPopup.prototype.createButtonBox = function(container){
	
	for(var i=0; i<3; i++)
	{
		var item;
		if(i == 0)
		{
			item = this.createButton(0);
		}
		else if(i == 1)
		{
			item = new com.castis.Spacer();
			item.setWidth("1em");
		}
		else if(i == 2)
		{
			item = this.createButton(1);
		}
		var panel = new com.castis.Panel(item);
		container.addItems([panel]);
	}
};
com.castis.ConfirmPopup.prototype.createButton = function(index){
	if(index == 0)
	{
		var text = "Yes";
	}
	else if(index == 1)
	{
		var text = "No";
	}
	var button = new com.castis.Button(text);
	button.setId(index);
	button.setClickHandler(this.onPopupButtonHandler);
	this.buttons.push(button);
	return button;
};
com.castis.ConfirmPopup.prototype.afterLayout = function(){
	com.castis.Global.addClass(this.panels[0].getElement(), "popup-title");
	com.castis.Global.addClass(this.panels[1].getElement(), "popup-message");
	com.castis.Global.addClass(this.panels[2].getElement(), "popup-button");
	com.castis.Global.addClass(this.items[1].getElement(), "message");
	this.buttons[0].getElement().focus();
};