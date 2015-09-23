/**
 * 기본 컨테이너 layout 객체. item 이 세로로 정렬한다
 *  
 */

var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
if (com.castis.VBox) throw new Error("error");


com.castis.VBox = function(){
	com.castis.Component.apply(this, ["vbox"]);
};
com.castis.VBox.prototype = new com.castis.HBox();
com.castis.VBox.prototype.constructor = com.castis.VBox;
