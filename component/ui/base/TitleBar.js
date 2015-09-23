
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
/**
 * 상단 타이틀바 컴포넌트
 * 생성시 txt 로 타이틀내용을 입력 할 수있다
 * 최대 2개의 버튼을 가질 수 있으며
 * 좌(0), 우(1) 인덱스를 갖는 버튼이다
 */
if (com.castis.TitleBar) throw new Error("error");


com.castis.TitleBar = function(text){
	com.castis.Component.apply(this, ["titlebar"]);
	//구조 컨테이너
	this.hbox = new com.castis.HBox();	
	//공간 더미
	this.spacer = new com.castis.Spacer();
	
	//아이템을 넣을 패널 컨테이너
	this.panels = new Array(3);
	//타이틀 텍스트
	this.text = new com.castis.InnerText(text);
	//타이틀 버튼
	this.buttons = new Array();
		
	this.init();
	
}; 

com.castis.TitleBar.prototype = new com.castis.Component();
com.castis.TitleBar.prototype.constructor = com.castis.TitleBar;
com.castis.TitleBar.prototype.init = function(){
	
	for(var i = 0; i < this.panels.length; i++)	{
		this.panels[i] = new com.castis.Panel();		
	}
	for(var i = 0; i < 2; i++)	{
		var button = new com.castis.Button();
		//버튼을 동적으로 만들 경우, 한쪽만 만들었을때 좌우 벨런스가 흐트러져 텍스트가 정 중앙에 위치하지 않는다
		//따라서 미리 만들어 놓고 숨겨 보이지 않도록한다.
		button.hide();
		button.setId(i);
		this.buttons.push(button);	
	}
	
	this.panels[0].addItem(this.buttons[0]);
	this.panels[1].addItem(this.text);
//	this.panels[1].setBoxFlex("1");
	this.panels[2].addItem(this.buttons[1]);
	
	this.hbox.addItems(this.panels);
	this.addChild(this.hbox);
	this.addChild(this.spacer);
	
	com.castis.Global.addClass(this.text.getElement(), "titlebar-label");		
};
com.castis.TitleBar.prototype.setText = function(text){
	this.text.setText(text);	
};
com.castis.TitleBar.prototype.getText = function(){
	this.text.getText();	
};
com.castis.TitleBar.prototype.afterAppend = function(){
	/*타이틀바 밑에 더미공간을 두어 다음 엘리멘트가 원하는 위치에 정착하도록 도움*/
	var titleHeight = $(this.hbox.getElement()).css("height");
	this.spacer.setHeight(titleHeight);
};
com.castis.TitleBar.prototype.getButton = function(index){
	return this.buttons[index];
};
/**
 * 타이틀의 버튼은 텍스트 또는 아이콘 둘중 하나만 가질 수 있다
 * 텍스트를 설정하면 아이콘은 사라진다
 * @param {} text
 * @param {} index : 0 좌, 1 우
 */
com.castis.TitleBar.prototype.setButtonText = function(text, index){
	this.buttons[index].show();
	this.buttons[index].setText(text);
	this.buttons[index].hideIcon();
};
/**
 * 타이틀의 버튼은 텍스트 또는 아이콘 둘중 하나만 가질 수 있다
 * 아이콘을 설정하면 텍스트는 사라진다.
 * @param {} text
 * @param {} index : 0 좌, 1 우
 */
com.castis.TitleBar.prototype.setButtonIconUrl = function(url, index){
	this.buttons[index].show();
	this.buttons[index].setIconUrl(url);
	this.buttons[index].hideText();
};
/**
 * event target 으로 버튼 객체가 들어간다.
 * @param {} handler
 */
com.castis.TitleBar.prototype.setButtonClickHandler = function(handler){
	$(this.element).bind("JSClick", handler);
};
/*com.castis.TitleBar.prototype.addButton = function(button, position){
	if(position == "left")
	{
		this.buttons[0] = button;
		//좌버튼
		this.panels[0].addItem(this.buttons[0]);
		this.panels[0].setWidth("60px");
		$(this.panels[0].getTargetElement()).css("padding", "0 5px");
	}
	else if(position == "right")
	{
		this.buttons[1] = button;
		
		this.panels[2].addItem(this.buttons[1]);
		this.panels[2].setWidth("60px");
		$(this.panels[2].getTargetElement()).css("padding", "0 5px");
	}
	else
	{
		alert("position error");
	}
};*/