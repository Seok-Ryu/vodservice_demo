
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
/**
 * 사용자 입력을 받을수 있는 인풋필드가 있는 팝업
 */
if (com.castis.PromptPopup) throw new Error("error");


com.castis.PromptPopup = function(){
	this.superclass("popup");
	com.castis.Global.addClass(this.element, "prompt-popup");
};
com.castis.PromptPopup.prototype = new com.castis.Popup();
com.castis.PromptPopup.prototype.constructor = com.castis.PromptPopup;
com.castis.PromptPopup.prototype.superclass = com.castis.Popup;


com.castis.PromptPopup.prototype.init = function(){
	var itemLength = 4;
	this.container = new com.castis.VBox();
	
	for(var i=0, max=itemLength; i < max; i++)
	{		
		var item = this.getItem(i);
		this.items[i] = item;
		this.panels[i] = new com.castis.Panel(this.items[i]);
	}
	this.layout();
};

com.castis.PromptPopup.prototype.getItem = function(index){
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
			this.inputText =  new com.castis.InputText(com.castis.InputText.TYPE_TEXT);
			this.inputText.setPlaceHolder("here");
			return this.inputText;
			break;
		case 3:
			var box = new com.castis.HBox();
			this.createButtonBox(box);
			return box;
			break;
		default:
			break;
	}
};
/**
 * 인풋필드에 입력된 값을 리턴
 * @return {}
 */
com.castis.PromptPopup.prototype.getInputValue = function(){
	if(!this.inputText)
	{
		return this.inputText.getValue();
	}
};
com.castis.PromptPopup.prototype.getInputText = function(){
	if(!this.inputText)
	{
		return this.inputText;
	}
};
com.castis.PromptPopup.prototype.layout = function(){
	com.castis.AlertPopup.prototype.layout.apply(this);
};

com.castis.PromptPopup.prototype.createButtonBox = function(container){
	
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
com.castis.PromptPopup.prototype.createButton = function(index){
	if(index == 0)
	{
		var text = "OK";
	}
	else if(index == 1)
	{
		var text = "Cancel";
	}
	var button = new com.castis.Button(text);
	button.setId(index);
	button.setClickHandler(this.onPopupButtonHandler);
	this.buttons.push(button);
	return button;
};
com.castis.PromptPopup.prototype.afterLayout = function(){
	com.castis.Global.addClass(this.panels[0].getElement(), "popup-title");
	com.castis.Global.addClass(this.panels[1].getElement(), "popup-message");
	com.castis.Global.addClass(this.panels[2].getElement(), "popup-input");
	com.castis.Global.addClass(this.panels[3].getElement(), "popup-button");
	com.castis.Global.addClass(this.items[1].getElement(), "message");
	
};
//show 한 이후에 value 를 초기화 함과 동시에 포커스
//show 이전에 하면 focus 가 사라지는 경우가 있음
com.castis.PromptPopup.prototype.afterShow = function(){
	$(this.inputText.inputElement).val("");
	$(this.inputText.inputElement).focus();
};