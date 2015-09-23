var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
/**
 * 리스트 아이템을 구성하는 기초 아이템이다. layout 은 없다
 * 각 아이템은 리스트아이템을 상속받아 구현한다
 */
if (com.castis.ListItem) throw new Error("error");


com.castis.ListItem = function(){
	com.castis.Component.apply(this, ["listitem"]);
	this.value = undefined;
};
com.castis.ListItem.prototype = new com.castis.Component();
com.castis.ListItem.prototype.constructor = com.castis.ListItem;
/**
 * 리스트가 가지는 hidden 값 설정, ex : data
 * @param {} value
 */
com.castis.ListItem.prototype.setValue = function(value){
	this.value = value;
};
com.castis.ListItem.prototype.getValue = function(){
	return this.value;
};
com.castis.ListItem.prototype.mouseClickListener = function(e){
//	console.log(e);
//	console.log("list click")
	var clickEvent = jQuery.Event("JSClick");
	clickEvent.target = this.component;
	$(this).trigger(clickEvent);
};
/**
 * item 에서 발생하는 이벤트의 핸들러 설정. 리스트 정의해서 사용하며 사용자는 사용할 필요가 없다
 * @param {} handler
 */
com.castis.ListItem.prototype.setClickHandler = function(handler){
	$(this.element).bind("JSClick", handler);
};
com.castis.ListItem.prototype.mousePressListener = function(e){
	/*e = listitem.element*/
//	e.stopPropagation();
//	com.castis.Global.addClass(this, com.castis.ListItem.pressString);	
//	console.log("list press")
	var id = com.castis.Global.getAutoIncreaseId();
	$(this).attr("id", id);
//	var listItem = this.component.getParentComponent().getParentComponent();
	var listItem = this.component;
	$(window).one("mouseup", listItem.mouseUpListener);
	
	$(this).toggleClass(com.castis.ListItem.PRESS_CLASS);
};
com.castis.ListItem.prototype.mouseUpListener = function(e){
	var id = "#"+com.castis.Global.getAutoId();
//	com.castis.Global.removeClassName($(id)[0],com.castis.ListItem.pressString);
	$(id).toggleClass(com.castis.ListItem.PRESS_CLASS);
};
/*com.castis.ListItem.prototype.overText = function(){
	console.log("111");
};*/
com.castis.ListItem.PRESS_CLASS = "list-pressing";

/*com.castis.ListItem.prototype.beforeMake = function(){
	
};
com.castis.ListItem.prototype.makeItem = function(){
	
};
com.castis.ListItem.prototype.afterMake = function(){
	
};*/
//인터페이스 적용
//com.castis.Interface.ensureImplements(new com.castis.ListItem, com.castis.IListItem);
