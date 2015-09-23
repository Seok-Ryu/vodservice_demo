var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
/**
 * 사용자 정의 리스트 아이템
 * list에 list item 을 설정할때 
 * custombox 에 원하는 모양을 만들어 던져주어 사용한다 
 */
if (com.castis.CustomListItem) throw new Error("error");
com.castis.CustomListItem = function(){
	com.castis.Component.apply(this, ["listitem"]);
	this.customBox = undefined;
	this.beforeMake();
	this.makeItem();
	this.afterMake();
};
com.castis.CustomListItem.prototype = new com.castis.ListItem();
com.castis.CustomListItem.prototype.constructor = com.castis.CustomListItem;

com.castis.CustomListItem.prototype.setCustomBox = function(customBox){
	/* 리스트로 만들어질 내용을 hbox가 루트로 가도록 하여 전달 하여야함*/
//	this.hbox = customBox;
	this.customBox = customBox;
	this.addChild(this.customBox);
};
com.castis.CustomListItem.prototype.getCustomBox = function(){
	return this.customBox;
};
com.castis.CustomListItem.prototype.beforeMake = function(){
	com.castis.Global.addClass(this.element, "custom-listitem");
};
com.castis.CustomListItem.prototype.makeItem = function(){
	
};
com.castis.CustomListItem.prototype.afterMake = function(){
	//이벤트
	$(this.element).bind("mousedown", this.mousePressListener);
	$(this.element).bind("click", this.mouseClickListener);
};

//인터페이스 적용
com.castis.Interface.ensureImplements(new com.castis.TextListItem, com.castis.IListItem);