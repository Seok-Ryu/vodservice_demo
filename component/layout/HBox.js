/**
 * 기본 컨테이너 layout 객체. item 이 가로로 정렬한다
 *  
 */
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
if (com.castis.HBox) throw new Error("error");

com.castis.HBox = function(){
	//!warning : prototype 함수를 통하여 부모를 호출하여 이중 호출이다.
	//그러나 해당 코드가 존재 하지 않으면 hbox 를 상속받은 vbox 에서 component 의 프로토타입을 직접 호출하지 않아
	//element 가 꼬이는 문제가 발생한다.
	com.castis.Component.apply(this, ["hbox"]);
};
com.castis.HBox.prototype = new com.castis.Component();
com.castis.HBox.prototype.constructor = com.castis.HBox;
/**
 * 가로 박스의 상,중,하 정렬, 세로박스의 좌,중,우 정렬
 * @param {} align : start, end, center, stretch 
 */
com.castis.HBox.prototype.setAlign = function(align)
{
	/*start, end, center, stretch*/
	$(this.element).css("-webkit-box-align", align);
};
/**
 * 가로박스의 좌,중,우 정렬, 세로박스의 상,중,하 정렬
 * @param {} align : start, end, center, justify
 * 
 */
com.castis.HBox.prototype.setPack = function(align)
{
	/*start, end, center, justify*/
	$(this.element).css("-webkit-box-pack", align);
};
/**
 * 해당 컴포넌트를 박스에 추가한다
 * @param {} item : component 객체를 상속받은 객체
 */
com.castis.HBox.prototype.addItem = function(item)
{
	this.addChild(item);
};
/**
 * 해당 컴포넌트배열을 박스에 추가한다
 * @param {} items : component 객체를 상속받은 객체배열
 */
com.castis.HBox.prototype.addItems = function(items)
{
	for(var i = 0; i < items.length ; i++)
	{
		this.addChild(items[i]);		
	}	
};
