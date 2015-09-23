
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
/**
 * 눌린 상태를 유지 하는 버튼
 * 탭모듈에서 사용 하며 
 * 차후 토글버튼 같은것을 구현 할 때 사용할 예정
 */
if (com.castis.SegmentButton) throw new Error("error");
			
com.castis.SegmentButton = function(text){
	com.castis.Component.apply(this, ["segmentbutton"]);
	
	//자바스크립트에서 함수이름과 변수이름이 같으면 변수를 참조함!!
	this.isPress = false;
	this.icon = new com.castis.Icon();
	this.text = new com.castis.InnerText(text);
	//구조 컨테이너
	this.vbox = new com.castis.VBox();
	this.panels = new Array(2);
	
	this.init();	
};
com.castis.SegmentButton.prototype = new com.castis.Button();
com.castis.SegmentButton.prototype.constructor = com.castis.SegmentButton;
com.castis.SegmentButton.prototype.init = function(){
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
	this.vbox.addItems(this.panels);
	this.addChild(this.vbox);	
	
	//클래스 이름 추가
	com.castis.Global.addClass(this.text.getElement(), "segmentbutton-label");
	com.castis.Global.addClass(this.icon.getElement(), "segmentbutton-icon");
	
	//icon mask 로 인해 마스크 색상이(css에서 설정) 보여짐으로, 디폴트로 visible 을 꺼버림
//	this.icon.hide();
	//이벤트 걸러내기
	$(this.element).bind("click", this.mouseClickListener);
};

com.castis.SegmentButton.prototype.setType = function(type){
	/*override*/
};
com.castis.SegmentButton.prototype.setIconUrl = function(url){
	//icon mask 화면에 표시
	this.icon.setMaskUrl(url);
};
com.castis.SegmentButton.prototype.setIconAlign = function(align){
	/*override*/
};
/**
 * 눌린 상태인지 확인
 * @return {} : boolean
 */
com.castis.SegmentButton.prototype.isPressed = function(){
	return this.isPress;
};
/**
 * 눌림 상태를 설정
 * @param {} flag : boolean
 */
com.castis.SegmentButton.prototype.setPressed = function(flag){
	this.isPress = flag;
	if(this.isPress)
	{
		this.active();
	}
	else
	{
		this.unActive();	
	}	
};
/**
 * 눌린 상태를 toggle
 */
com.castis.SegmentButton.prototype.toggle = function(){
	if(this.isPress)
	{
		this.setPressed(false);		
	}
	else
	{
		this.setPressed(true);
	}
};
/**
 * 눌린 상태에서 할일
 */
com.castis.SegmentButton.prototype.active = function(){
	com.castis.Global.addClass(this.element, com.castis.SegmentButton.PRESS_CLASS);	
};
/**
 * 눌리지 않은 상태에 할일
 */
com.castis.SegmentButton.prototype.unActive = function(){
	com.castis.Global.removeClassName(this.element, com.castis.SegmentButton.PRESS_CLASS);	
};
/**
 * 외부 핸들러
 * @param {} handler
 */
com.castis.SegmentButton.prototype.setClickHandler = function(handler){
	$(this.element).bind("JSClick", handler);
};
com.castis.SegmentButton.prototype.mouseClickListener = function(e){
	/*여기서 this 는 button.element 이다
	 *event target 에 실려가는것은 이벤트가 발생한 버튼 모듈(컴포넌트) 객체이다.
	 * */
	var segbtn = this.component;
	//이미 눌려있는 상태면 리턴
	if(segbtn.isPressed()) return;
	
//	segbtn.setPressed(true);
	
	var clickEvent = jQuery.Event("JSClick");
	clickEvent.target = segbtn;
	$(this).trigger(clickEvent);
};
com.castis.SegmentButton.prototype.afterAppend = function(){
	/*$(this.icon.image).css("width", "2em");*/
};
com.castis.SegmentButton.PRESS_CLASS = "segment-pressed";