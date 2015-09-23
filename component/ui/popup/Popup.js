
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
/**
 * 팝업들의 base 클래스
 */
if (com.castis.Popup) throw new Error("error");
com.castis.Popup = function(type){
	com.castis.Component.apply(this, [type]);
	this.container = undefined;
	this.panels = new Array();
	this.items = new Array();
	this.title = undefined;
	this.message = undefined;
	this.buttons = new Array();
	this.popupType = type;
	this.targetView = undefined;
//	this.init();
	/*$(window).resize(this, function(e) {
  		var popup = e.data;
  		popup.afterAppend();
	});*/
};
com.castis.Popup.prototype = new com.castis.Component();
com.castis.Popup.prototype.constructor = com.castis.Popup;
/*com.castis.Popup.prototype.setType = function(type){
	switch(type)
	{
		case this.TYPE_CONFIRM:
			this.popupType = type;
			this.itemLength = 4;
			break;
		case this.TYPE_PROMPT:
			this.popupType = type;
			break;
		case this.TYPE_CUSTOM:
			this.popupType = type;
			break;
		default:
			this.popupType = this.TYPE_ALERT;
			this.itemLength = 3;
			break;
	}
};*/
com.castis.Popup.prototype.init = function(){
	/*override*/
};
com.castis.Popup.prototype.layout = function(){
	/*override*/
};
com.castis.Popup.prototype.afterLayout = function(){
	/*override*/
};
com.castis.Popup.prototype.getItem = function(){
	/*override*/
};
com.castis.Popup.prototype.beforeShow = function(){
	/*override*/
};
com.castis.Popup.prototype.afterShow = function(){
	/*override*/
};
com.castis.Popup.prototype.setTargetView = function(targetView){
	this.targetView = targetView;
};
/**
 * 팝업을 보임
 */
com.castis.Popup.prototype.show = function(){
	$(this.element).css("display", "-webkit-box");
	$("body:eq(0)").css("overflow-y", "hidden");
	$("body:eq(0)").css("background", "rgba(0, 0, 0, 0.3) center center no-repeat");
};
/**
 * 팝업을 감춤
 */
com.castis.Popup.prototype.hide = function(){
	$(this.element).css("display", "none");
	$("body:eq(0)").css("overflow-y", "auto");
};
/**
 * 팝업 상단 타이틀을 설정
 * @param {} text
 */
com.castis.Popup.prototype.setTitle = function(text){
	this.title.setText(text);
};
/**
 * 팝업 내용인 메시지를 설정
 * @param {} text
 */
com.castis.Popup.prototype.setMessage = function(text){
	//span 을 사용하면 자동 줄바꿈이 되지 않아 innerText 객체를 사용하지 않음
//	(this.message.getElement()).innerHTML = text;
	$(this.message.getElement()).html(text);
};
com.castis.Popup.prototype.setButtonText = function(text, index){
//	console.log(this.item[2]);
	this.buttons[index].setText(text);
};
com.castis.Popup.prototype.setButtonhandler = function(handler, index){
	this.buttons[index].setClickHandler(this.onPopupHandler);
};
com.castis.Popup.prototype.setPopupHandler= function(handler){
	$(this.element).bind("PopupClick", handler);
};

com.castis.Popup.prototype.onPopupButtonHandler = function(e){
	var button = e.target; 
	var popup = button.findParentComponent("popup");
	
	var event = jQuery.Event("PopupClick");
	event.target = popup;
	event.buttonIndex = button.getId();
	$(popup.getElement()).trigger(event);
};
/**
 * 팝업 외부가 눌리면 팝업이 닫히 도록 설정
 * 버튼이 없는 팝업에서 주로 사용
 */
com.castis.Popup.prototype.onHider = function(){
	$(this.element).bind("click", function(e) {
				// this 는 팝업 최상단 엘리멘트임
				// e.target은 직접 클릭을 받은 엘리멘트임으로
				// 클릭된곳이 팝업 외부라면 팝업을 닫음
				if (e.target == this) {
					this.component.hide();
				}

			});
};
com.castis.Popup.prototype.offHider = function(){
	$(this.element).unbind("click");
};
com.castis.Popup.TYPE_ALERT = "alert";
com.castis.Popup.TYPE_CONFIRM = "confirm";
com.castis.Popup.TYPE_PROMPT = "prompt";
com.castis.Popup.TYPE_CUSTOM = "custom";