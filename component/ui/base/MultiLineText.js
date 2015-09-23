
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
/**
 * 여러줄의 text를 넣기 위한 컴포넌트
 * 생성시 txt 를 받을 수 있음
 * text 는 p 으로 처리
 */
if (com.castis.MultiLineText) throw new Error("error");


com.castis.MultiLineText = function(txt){
	com.castis.Component.apply(this, ["MultiLineText"]);	
	this.text = null;
	this.init();
	this.setText(txt);
};
com.castis.MultiLineText.prototype = new com.castis.Component();
com.castis.MultiLineText.prototype.constructor = com.castis.MultiLineText;
com.castis.MultiLineText.prototype.init = function(){
	this.text = function(parent)
	{	
		var text = document.createElement("p");
		parent.appendChild(text);	
		return text;
	}(this.element);
	
};
com.castis.MultiLineText.prototype.setText = function(text){
	if(text)
	{
		this.text.innerHTML = text;
	}
	else
	{
		this.text.innerHTML = " ";
	}	
};
com.castis.MultiLineText.prototype.getText = function(){
	return this.text.innerHTML;
};
com.castis.MultiLineText.prototype.setAlign = function(align){
	this.element.style.textAlign = align;
};
com.castis.MultiLineText.prototype.setColor = function(color){
	$(this.text).css("color", color);
};