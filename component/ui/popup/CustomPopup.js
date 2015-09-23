
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
/**
 * 사용자가 모양을 만들수 있는 팝업
 * 커스텀 박스설정을 통해 모습을 표현한다
 */
if (com.castis.CustomPopup) throw new Error("error");
com.castis.CustomPopup = function(){
	this.superclass("popup");
	com.castis.Global.addClass(this.element, "custom-popup");
};
com.castis.CustomPopup.prototype = new com.castis.Popup();
com.castis.CustomPopup.prototype.constructor = com.castis.CustomPopup;
com.castis.CustomPopup.prototype.superclass = com.castis.Popup;


com.castis.CustomPopup.prototype.init = function(){	
	this.container = new com.castis.VBox();
	this.layout();
};
com.castis.CustomPopup.prototype.layout = function(){
	this.addChild(this.container);
	this.setRootElement(this.targetView.root);
	this.afterLayout();
};
/**
 * 사용자가 정의한 모양의 박스를 설정. vbox, hbox 등을 권장한다
 * @param {} customBox
 */
com.castis.CustomPopup.prototype.setCustomBox = function(customBox){
	this.customBox = customBox;
	this.container.addItems([this.customBox]);
};
com.castis.CustomPopup.prototype.getCustomBox = function(){
	return this.customBox;
};