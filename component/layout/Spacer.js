/**
 * 빈공간을 유지할때 사용하는 컴포넌트
 */

var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
if (com.castis.Spacer) throw new Error("error");

//com.castis.Component = {};
/**
 * 공간을 유지할 뿐 다른 역할은 하지 않는다. 보이지 않는다
 */
com.castis.Spacer = function(){
	com.castis.Component.apply(this, ["spacer"]);
};
com.castis.Spacer.prototype = new com.castis.Component();
com.castis.Spacer.prototype.constructor = com.castis.Spacer;
/**
 * 가로 크기 지정
 * @param {} value
 */
com.castis.Spacer.prototype.setWidth = function(value){
	$(this.element).css("width", value);
};
/**
 * 세로 크기 지정
 * @param {} value
 */
com.castis.Spacer.prototype.setHeight = function(value){
	$(this.element).css("height", value);
};