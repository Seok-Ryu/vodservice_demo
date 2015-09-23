
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
/**
 * 우측에 1개의 버튼을 가진 리스트아이템
 */
if (com.castis.ButtonListItem) throw new Error("error");

com.castis.ButtonListItem = function(){
	this.button = undefined;
	//상위생성자에서 buttonlistitem 의 메소드에 접근하는데 button 이 없으면 에러임으로 super를 나중에 불러줌
	this.superclass(arguments);
//	com.castis.Component.apply(this, ["listitem"]);
	
//	
//	this.beforeMake();
//	this.makeItem();
//	this.afterMake();
//	com.castis.Global.addClass(this.element, "buttonlistitem");
};
com.castis.ButtonListItem.prototype = new com.castis.TextListItem();
com.castis.ButtonListItem.prototype.constructor = com.castis.ButtonListItem;
com.castis.ButtonListItem.prototype.superclass = com.castis.TextListItem;

com.castis.ButtonListItem.prototype.beforeMake = function(){
	com.castis.TextListItem.prototype.beforeMake.apply(this);
	//상위에서 없는것만 추가로 실행
	this.itemLength = 2;
	this.button = new com.castis.Button();
	this.button.disableBubble();
	com.castis.Global.addClass(this.element, "button-listitem");
};
com.castis.ButtonListItem.prototype.makeItem = function(){
	for(var i = 0; i < this.itemLength; i++)	
	{
		var item = undefined;
		this.panels[i] = new com.castis.Panel();
		
		if(i == 0)
		{
			item = this.text;
			this.panels[i].setBoxFlex(1);
		}
		else if(i == 1)
		{
			item = this.button;
			//icon 만 있을경우 레이아웃을 깨져서 임시로 숨김. 텍스트를 설정하면 보이도록 함
			item.hideText();
		}
		
		this.panels[i].addItem(item);		
	}
};/*
com.castis.ButtonListItem.prototype.setMoustEvent = function(){
//	var target = this.panels[0].getElement();
	$(this.element).bind("mousedown", this.mousePressListener);
	$(this.element).bind("click", this.mouseClickListener);
};*/
com.castis.ButtonListItem.prototype.setButtonText = function(text){
	this.button.showText();
//	this.button.setIconUrl("");
	this.button.setText(text);
};
com.castis.ButtonListItem.prototype.setButtonIconUrl = function(url){
	this.button.setIconUrl(url);
};
com.castis.ButtonListItem.prototype.getButton = function(){
	return this.button;
};