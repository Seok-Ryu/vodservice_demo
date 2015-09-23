
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
/**
 * 텍스트 필드 1개를 갖고 있는 리스트아이템
 * 
 */
if (com.castis.TextListItem) throw new Error("error");
com.castis.TextListItem = function(){
	com.castis.Component.apply(this, ["listitem"]);	 
	//레이아웃 재료
	this.itemLength = undefined;
	this.hbox = undefined;
	this.panels = undefined;
	this.text = undefined;
	
	this.beforeMake();
	this.makeItem();
	this.afterMake();
};
com.castis.TextListItem.prototype = new com.castis.ListItem();
com.castis.TextListItem.prototype.constructor = com.castis.TextListItem;
com.castis.TextListItem.prototype.beforeMake = function(){
	//레이아웃 재료
	this.itemLength = 1;
	this.hbox = new com.castis.HBox();
	this.panels = new Array();	
	this.text = new com.castis.InnerText();
	com.castis.Global.addClass(this.element, "text-listitem");
	com.castis.Global.addClass(this.text.getElement(), "list-text");
};
com.castis.TextListItem.prototype.makeItem = function(){
	for(var i = 0; i < this.itemLength; i++)	
	{
		this.panels[i] = new com.castis.Panel();
		this.panels[i].addItem(this.text);
		this.panels[i].setBoxFlex(1);
	}
};
com.castis.TextListItem.prototype.afterMake = function(){
	this.hbox.addItems(this.panels);
//	this.hbox.setAlign("center");
	this.addChild(this.hbox);
	this.setMoustEvent();
};
com.castis.TextListItem.prototype.setMoustEvent = function(){
	//이벤트
	var target = this.element;
	$(target).bind("mousedown", this.mousePressListener);
	$(target).bind("click", this.mouseClickListener);
};
com.castis.TextListItem.prototype.setText = function(text){
	this.text.setText(text);
};


//인터페이스 적용
com.castis.Interface.ensureImplements(new com.castis.TextListItem, com.castis.IListItem);