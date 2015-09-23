
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
/**
 * 인풋필드를 보기좋게 묶은 레이아웃적 성격이 강한 컴포넌트
 */
if (com.castis.FieldSet) throw new Error("error");
com.castis.FieldSet = function(){
	com.castis.Component.apply(this, ["fieldset"]);
	this.vbox = undefined;
	this.itembox = undefined;
	this.title = undefined;
	this.items = undefined;
	this.size = 0;
	this.comment = undefined;
	this.image = null;
	this.init();
};

com.castis.FieldSet.prototype = new com.castis.Component();
com.castis.FieldSet.prototype.constructor = com.castis.FieldSet;
com.castis.FieldSet.prototype.init = function(){
	this.vbox = new com.castis.VBox();
	this.itembox = new com.castis.VBox();
	this.title = new com.castis.InnerText();
	com.castis.Global.addClass(this.title.getElement(), "fieldset-label");
	this.items = new Array();
	this.comment = new com.castis.InnerText();
	this.layout();
};
com.castis.FieldSet.prototype.layout = function(){
	this.vbox.addItems([this.title, this.itembox]);
	this.addChild(this.vbox);
};
com.castis.FieldSet.prototype.setSize = function(size){
	this.size = size;
};
/**
 * fieldset 에 inputtext 등 form 컴포넌트를 붙인다.
 * @param {} item
 */
com.castis.FieldSet.prototype.addItem = function(item){
	this.items.push(item);
//	var boxsize = this.vbox.getChilds().length;
	this.itembox.addItems([item]);
};
/**
 * 컴포넌트 배열을 붙인다
 * @param {} items
 */
com.castis.FieldSet.prototype.addItems = function(items){
	for(var i=0, max = items.length; i < max; i++)
	{
		this.addItem(items[i]);
	}
};
/**
 * 셋의 라벨(타이틀)을 설정한다
 * @param {} text
 */
com.castis.FieldSet.prototype.setTitle = function(text){
	this.title.setText(text);
};