
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
/**
 * 사용자의 입력을 받기 위한 input field
 * TYPE_TEXT TYPE_PASSWORD TYPE_NUMBER TYPE_EMAIL TYPE_TEL TYPE_URL TYPE_HIDDEN TYPE_SEARCH
 * 생성자로 type 을받으며 default text이다.
 */
if (com.castis.InputText) throw new Error("error");


com.castis.InputText = function(type){
	com.castis.Component.apply(this, ["inputtext"]);
	this.hbox = undefined;
	this.label = undefined;
	this.panels = new Array(4);
	this.intputBox = undefined;
	this.inputElement = undefined;
	this.clearButton = undefined;
	this.inputType = (type == null)? com.castis.InputText.TYPE_TEXT : type;
	this.init();
};

com.castis.InputText.prototype = new com.castis.Component();
com.castis.InputText.prototype.constructor = com.castis.InputText;
com.castis.InputText.prototype.init = function(){
	this.hbox = new com.castis.HBox();
	this.label = new com.castis.InnerText();
	com.castis.Global.addClass(this.label.getElement(), "input-label");
	for(var i=0,max=this.panels.length; i < max; i++)
	{
		this.panels[i] = new com.castis.Panel();	
	}
	this.intputBox = new com.castis.HBox();
	this.inputElement = (function(type)	{
		var $element = $("<input type="+type+">");
//		$element.attr("type", this.inputType);
		$element.attr("class", "inputfield");
		$element.attr("autocapitalize", "off");
		return $element[0];
	}(this.inputType));
	this.clearButton = new com.castis.Button();
	this.clearButton.setClickHandler(this.onClickClear);
	this.clearButton.setIconUrl("component/resources/clear_icon.png");
	this.clearButton.hideText();
	com.castis.Global.addClass(this.clearButton.getElement(), "clear-button");
	$(this.inputElement).bind("keydown", function(e){console.log(e.keyCode);});
	$(this.inputElement).bind("change", this.onChangedValue);
	this.layout();
};
com.castis.InputText.prototype.layout = function(){
	//라벨을 입력하지 않으면 라벨부분이 보여지지 않는다.
	this.panels[0].addItem(this.label);
	$(this.panels[0].getElement()).hide();
	//!!!Warning!!! HTML Element를 직접 붙여줌
	this.panels[1].getElement().appendChild(this.inputElement);
	this.panels[2].addItem(this.clearButton);
	this.hbox.addItems([this.panels[0],this.panels[1], this.panels[2]]);
	this.addChild(this.hbox);
};
com.castis.InputText.prototype.onChangedValue = function(e){
	var value = $(this).val();
	console.log(value+" :: " + value.length);
	
};
/**
 * 인풋필드의 라벨을 설정
 * @param {} text
 */
com.castis.InputText.prototype.setLabel = function(text){
	this.label.setText(text);
	$(this.panels[0].getElement()).show();
};
/**
 * 초기값으로 보여질 홀더를 설정
 * @param {} text
 */
com.castis.InputText.prototype.setPlaceHolder = function(text){
	$(this.inputElement).attr("placeholder", text);
};
com.castis.InputText.prototype.onClickClear = function(e){
	var inputComponent = e.target.getParentComponent().getParentComponent().getParentComponent();
	inputComponent.clearText();
};
com.castis.InputText.prototype.clearText = function(){
//	var inputComponent = e.target.getParentComponent().getParentComponent().getParentComponent();
//	console.log(inputComponent.getValue());
	$(this.inputElement).val("");
};
/**
 * form 의 name 을 설정. 서버와 연동시 사용
 * @param {} name
 */
com.castis.InputText.prototype.setName = function(name){
	$(this.inputElement).attr("name", name);
};
/**
 * 인풋에 입력된 값을 반환
 * @return {}
 */
com.castis.InputText.prototype.getValue = function(){
	return $(this.inputElement).val();
};
com.castis.InputText.prototype.setType = function(type){
//	$(this.inputElement).attr("type", type);
	this.inputElement.setAttribute("type", type);
};

com.castis.InputText.TYPE_TEXT = "text";
com.castis.InputText.TYPE_PASSWORD = "password";
com.castis.InputText.TYPE_NUMBER = "number";
com.castis.InputText.TYPE_EMAIL = "email";
com.castis.InputText.TYPE_TEL = "tel";
com.castis.InputText.TYPE_URL = "url";
com.castis.InputText.TYPE_HIDDEN = "hidden";
com.castis.InputText.TYPE_SEARCH = "search";