/**
 * 박스안에 작은 layout, 비율을 지정 할 수 있다
 */
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
if (com.castis.Panel) throw new Error("error");

/**
 * panel 은 최대 1개의 item 만 가질 수 있으며 생성시에 지정 가능하다
 * @param {} item : panel 에 지정할 component 객체
 */
com.castis.Panel = function(item){
	com.castis.Component.apply(this, ["panel"]);
	this.addItem(item);
};
com.castis.Panel.prototype = new com.castis.Component();
com.castis.Panel.prototype.constructor = com.castis.Panel;
/**
 * 
 * @param {} item : panel 에 지정할 component 객체
 */
com.castis.Panel.prototype.addItem = function(item){
	/*패널은 박스와 달리 1개의 아이템만 넣을 수 있다*/
	if(item != null)
	{
		if(this.getChilds().length > 0)
		{
			this.removeChilds();
		}
		this.addChild(item);
	}
};
/**
 * 패널에 들어 있는 component 객체를 가져온다
 * @return {}
 */
com.castis.Component.prototype.getChild = function(){
	return this.childComponents[0];
};
/**
 * 비율을 지정한다
 * @param {} value : 0은 item에 맞춤 1은 빈공간을 최대한 이용하며 1이상은 비율을 의미한다
 */
com.castis.Panel.prototype.setBoxFlex = function(value){
	$(this.element).css("-webkit-box-flex", value.toString());
};
/*
com.castis.Panel.prototype.setWidth = function(value){
	$(this.element).css("width", value);
};*/