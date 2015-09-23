	
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
/**
 * 버튼 컴포넌트
 * 현재 div 엘리멘트를 사용중이나 button 엘리멘트로 으로 변경할 계획을 가지고 있음
 */
if (com.castis.Button) throw new Error("error");

com.castis.Button = function(text){
	com.castis.Component.apply(this, ["button"]);
	this.type = "normal";
	this.isBubble = true;
	this.value = null;
	this.icon = new com.castis.Icon();
	this.text = new com.castis.InnerText(text);
	//구조 컨테이너
	this.hbox = new com.castis.HBox();
	this.panels = new Array(2);
	this.init();
};
com.castis.Button.prototype = new com.castis.Component();
com.castis.Button.prototype.constructor = com.castis.Button;
com.castis.Button.prototype.init = function(){	
	//구조 만들기
	for(var i = 0; i < this.panels.length; i++)	
	{
		var item = undefined;
		if(i == 0)
		{
			item = this.icon;
		}
		else if(i == 1)
		{
			item = this.text;
		}
		this.panels[i] = new com.castis.Panel();
		this.panels[i].addItem(item);
		this.panels[i].setBoxFlex(i);
	}
	
	this.hbox.addItems(this.panels);
	this.addChild(this.hbox);
	
	//클래스 이름 추가
	com.castis.Global.addClass(this.text.getElement(), "button-label");
	com.castis.Global.addClass(this.icon.getElement(), "button-icon");
	//마우스 리스너
	this.enable();
};

/*com.castis.Button.prototype.getIconWidth = function(){
	
}*/
/*com.castis.Button.prototype.setInnerTextWidth = function(){
	//버튼 넓이 구하기
	var $target = $(this.targetElement);	
	var buttonWidth = $target.css("width");
	//텍스트 넓이에 적용
	var $innerText = $(this.text.getTargetElement());
	$innerText.css("width", buttonWidth);
	alert(buttonWidth);
}*/
/*com.castis.Button.prototype.getTextField = function(){
	return this.text;
};*/
/**
 * 버튼 UI 타입을 지정, back 은 구현 예정
 * @param {} type : normal, decline, confirm 을 사용 할 수 있다.
 */
com.castis.Button.prototype.setUiType = function(type){
	/*normal, decline, confirm, back*/
	this.type = type;
	$(this.element).attr("class", (this.className + " " + this.type));
};
/**
 * 버튼속에 hidden 으로 감춰 두고 싶은 값을 지정
 * @param {} value
 */
com.castis.Button.prototype.setValue = function(value)
{
	this.value = value;
};
com.castis.Button.prototype.getValue = function()
{
	return this.value;
};
com.castis.Button.prototype.setText = function(text)
{
	this.text.setText(text);
};
com.castis.Button.prototype.getText = function(){
	return this.text.getText();
};
com.castis.Button.prototype.setIconUrl = function(url){
	this.icon.setUrl(url);
	/*//icon 의 width 를 구함
	var $icon = $(this.icon.getTargetElement());	
	var iconWidth = $icon.css("width");
	//innertext width 구함
	var $innerText = $(this.text.getTargetElement());
	var textWidth = $innerText.css("width"); 
	$innerText.css("width", (textWidth-iconWidth));*/
};
com.castis.Button.prototype.enable = function(){
	$(this.element).bind("mousedown", this.mousePressListener);
	$(this.element).bind("click", this.mouseClickListener);
};
com.castis.Button.prototype.disable = function(){
	$(this.element).unbind("mousedown", this.mousePressListener);
	$(this.element).unbind("click", this.mouseClickListener);
};
com.castis.Button.prototype.show = function(){
	$(this.element).css("opacity", "100");
};
com.castis.Button.prototype.hide = function(){
	$(this.element).css("opacity", "0");
};
com.castis.Button.prototype.showText = function(){
	$(this.text.getParentComponent().getElement()).css("display", "block");
};
com.castis.Button.prototype.hideText = function(){
	$(this.text.getParentComponent().getElement()).css("display", "none");
};
com.castis.Button.prototype.showIcon = function(){
	$(this.icon.getParentComponent().getElement()).css("display", "block");
};
com.castis.Button.prototype.hideIcon = function(){
	$(this.icon.getParentComponent().getElement()).css("display", "none");
};
/**
 * 아이콘의 위치를 버튼 왼쪽과 오른쪽중 선택 할 수 있다.
 * @param {} align : left, right
 */
com.castis.Button.prototype.setIconAlign = function(align){
	/*left, right*/
	if(align == com.castis.AlignType.LEFT)
	{
		$(this.hbox.getElement()).css("-webkit-box-direction", "normal");
	}
	else if(align == com.castis.AlignType.RIGHT)
	{
		$(this.hbox.getElement()).css("-webkit-box-direction", "reverse");		
	}
	
};
com.castis.Button.prototype.setTextAlign = function(align){
	this.text.setAlign(align);
};
/**
 * 버튼 클릭이벤트를 받기 위한 핸들러를 설정
 * @param {} handler
 */
com.castis.Button.prototype.setClickHandler = function(handler){
	$(this.element).bind("JSClick", handler);
};
/**
 * 버블링을 사용하도록 설정
 * 
 */
com.castis.Button.prototype.enableBubble = function(){
	this.isBubble = true;
};
/**
 * 버블링을 사용하지 않도록 설정
 */
com.castis.Button.prototype.disableBubble = function(){
	this.isBubble = false;
};
com.castis.Button.prototype.checkBubble = function(e){
	if(!this.isBubble)
	{
		e.stopPropagation();
	}
};
com.castis.Button.prototype.mouseClickListener = function(e){
	/*여기서 this 는 button.element 이다
	 *event target 에 실려가는것은 이벤트가 발생한 버튼 모듈(컴포넌트) 객체이다.
	 * */
//	console.log("btn clk");
	this.component.checkBubble(e);
	var clickEvent = jQuery.Event("JSClick");
	clickEvent.target = this.component;
	$(this).trigger(clickEvent);
};
com.castis.Button.prototype.mousePressListener = function(e){
	/*1. press처리를 하고
	2. 윈도우 up 핸들러를 설정한다
	3. 윈도우 업이 발생하면 핸들러에서 프레스를 제거하고
	4. 리스너를 지운다*/
	this.component.checkBubble(e);
	com.castis.Global.addClass(this, com.castis.Button.PRESS_CLASS);
	var id = com.castis.Global.getAutoIncreaseId();
	$(this).attr("id", id);
	//한번 사용하면 지우는 리스너
	$(window).one("mouseup", this.component.mouseUpListener);
//	window.addEventListener("mouseup", this.component.setUpListener, false);
};
com.castis.Button.prototype.mouseUpListener = function(e){
	var id = "#"+com.castis.Global.getAutoId();
	com.castis.Global.removeClassName($(id)[0],com.castis.Button.PRESS_CLASS);
//	window.removeEventListener("mouseup", this.component.setUpListener, false);
};

com.castis.Button.PRESS_CLASS = "button-pressing";
com.castis.Button.UI_TYPE_NORMAL = "normal";
com.castis.Button.UI_TYPE_DECLINE = "decline";
com.castis.Button.UI_TYPE_CONFIRM = "confirm";

