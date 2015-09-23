
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
/**
 * text를 넣기 위한 컴포넌트
 * 생성시 txt 를 받을 수 있음
 * text 는 span 으로 처리
 * setsize 는 권장하지 않는다
 */
if (com.castis.InnerText) throw new Error("error");


com.castis.InnerText = function(txt){
	com.castis.Component.apply(this, ["innertext"]);	
	this.text = null;
	this.init();
	this.setText(txt);
};
com.castis.InnerText.prototype = new com.castis.Component();
com.castis.InnerText.prototype.constructor = com.castis.InnerText;
com.castis.InnerText.prototype.init = function(){
	this.text = function(parent)
	{	
		var text = document.createElement("span");
		text.innerHTML = "";
		//text.setAttribute("class",className);
		parent.appendChild(text);	
		return text;
	}(this.element);
	
};
com.castis.InnerText.prototype.setText = function(text){
	if(text)
	{
		this.text.innerHTML = text;
	}
	else
	{
		this.text.innerHTML = " ";
	}
	
	//뒤에 px 가 붙어있으므로 int 로 변경
//	var spanWidth = parseInt($(this.text).css("width"));
	//left right 같으므로 *2
//	spanWidth += parseInt($(this.text).css("padding-left"))*2;	
	
//	var $div = $(this.targetElement);
	//$div.css("width",spanWidth);
	//alert("spanWidth" + spanWidth + " // div width" + $div.css("width"));
};
com.castis.InnerText.prototype.getText = function(){
	return this.text.innerHTML;
};
com.castis.InnerText.prototype.setAlign = function(align){
	this.element.style.textAlign = align;
};
com.castis.InnerText.prototype.setSize = function(size){
	this.text.style.fontSize = size;
};
com.castis.InnerText.prototype.setColor = function(color){
	$(this.text).css("color", color);
};