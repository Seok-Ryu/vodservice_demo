
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
/**
 * 하단 탭을 위한 컴포넌트
 * 상단에 들어가면 화면이 안이쁘다.
 * 생성시 탭 아이템의 사이즈를 설정 할 수 있다.
 * 최대 아이템의 갯수는 5개이다.
 */
if (com.castis.TabBar) throw new Error("error");

com.castis.TabBar = function(size){
	com.castis.Component.apply(this, ["tabbar"]);
	//구조 컨테이너
	this.hbox = new com.castis.HBox();	
	//공간 더미
	this.spacer = new com.castis.Spacer();	
	//아이템을 넣을 패널 컨테이너
	this.panels = new Array();
	//tab 버튼
	this.items = new Array();
	this.init(size);
	/*
	//아이템 클릭 리스너를 위한 구조
	this.itembox = new com.castis.HBox();
	com.castis.Global.addClass(this.itembox.getTargetElement(), "itembox");
	this.itembox.appendToParent(this.hbox.getTargetElement());
	*/
}; 

com.castis.TabBar.prototype = new com.castis.Component();
com.castis.TabBar.prototype.constructor = com.castis.TabBar;
com.castis.TabBar.prototype.init = function(size){
	this.addChild(this.hbox);
	this.addChild(this.spacer);
	this.setItemSize(size);
	//윈도우 크기가 변하면 위치 및 아이템 크기를 다시 설정한다.
	$(window).resize(this, function(e) {
  		var tabbar = e.data;
  		tabbar.afterAppend();
	});
};
com.castis.TabBar.prototype.setItemSize = function(size){
	
	size = this.checkOverMaxSize(size);
	for(var i = 0; i < size; i++)
	{
		this.items[i] = new com.castis.SegmentButton();
		this.items[i].setId(i);
		//버블링으로 자동으로 전달됨
		this.items[i].setClickHandler(this.itemClickListener);
		
		this.panels[i] = new com.castis.Panel();		
		this.panels[i].addItem(this.items[i]);
	}
	this.hbox.addItems(this.panels);
	this.afterAppend();
};
com.castis.TabBar.prototype.checkOverMaxSize = function(size){
	if(size > com.castis.TabBar.MAX_ITEM_SIZE)
	{
		return com.castis.TabBar.MAX_ITEM_SIZE;
	}
	return size;
};
com.castis.TabBar.prototype.getItemSize = function(){
	return this.items.length;
};
/**
 * 최대 한글 5글자, 영문 12글자
 * @param {} text
 * @param {} index
 */
com.castis.TabBar.prototype.setItemText = function(text, index){
	this.items[index].setText(text);
};
com.castis.TabBar.prototype.setItemIconUrl = function(url, index){
	this.items[index].setIconUrl(url);
};
/**
 * 지정된 인덱스의 아이템을 press 한다
 * @param {} index
 */
com.castis.TabBar.prototype.selectItem = function(index){
	this.items[index].setPressed(true);
};
/**
 * 탭이벤트 핸들러 event의 target은 버튼 객체 getId 로 몇번 버튼이 눌렸는지 알 수 있다
 * @param {} handler
 */
com.castis.TabBar.prototype.setClickHandler = function(handler){
	//버블링으로 자동으로 전달됨
	$(this.element).bind("JSClick", handler);
};
com.castis.TabBar.prototype.itemClickListener = function(e){
	/**
	 * 여기서 e는 segmentbutton 에서 만들어진 사용자정의이벤트로 target 에 버튼 객체가 들어있다.
	 */
	var btn = e.target;
	var tabbar = btn.findParentComponent("tabbar");
	for(var i = 0; i < tabbar.items.length; i++)
	{
		if(tabbar.items[i].isPressed())
		{
			tabbar.items[i].setPressed(false);	
		}
	}
	btn.setPressed(true);
};
/*com.castis.TabBar.prototype.itemClickListener = function(e){
	여기서 this 는 선택된 세그먼트 버튼 아이템 div = e.currentTarget 
	
	//아이템을 언엑티브
	//아 코드더럽다 -_ㅠ
	var tabbuttons = this._this.parent._this.parent._this.parent._this.parent._this.segmentButtons;
	console.log(tabbuttons);
	for(var i=0; i < tabbuttons.length; i++)
	{
		tabbuttons[i].setUnActive();
	}
	//선택된 아이템을 엑티브
	this._this.setActive();
	
	//사용자에게 이벤트를 전달
	var tabEvent = jQuery.Event("tabClick");
	tabEvent.id = e.currentTarget.id;
	//itembox 에 접근
	$(this).parent().parent().trigger(tabEvent);
};
com.castis.TabBar.prototype.setClickHandler = function(handler){
	$(this.itembox.getTargetElement()).bind("tabClick", handler);
};*/

com.castis.TabBar.prototype.afterAppend = function(){
	//tabbar 의 위치 잡기
	var windowHeight = window.innerHeight;
	var tabbarHeight = parseInt($(this.hbox.getElement()).css("height"));
	console.log(this.hbox.getElement().css("border-bottom"));
	$(this.element).css("top", (windowHeight-tabbarHeight) +"px");
	//더미이미지 높이 설정
//	this.spacer.setHeight(tabbarHeight+"px");
	
	var maxItemWidth = (window.innerWidth/this.getItemSize())-(com.castis.TabBar.ITEM_MARGIN*2);
	if(maxItemWidth < com.castis.TabBar.ITEM_MAX_WIDTH)
	{
		for(var i=0, max=this.panels.length; i<max; i++)
		{
			$(this.panels[i].getElement()).css("max-width", maxItemWidth+"px");
			$(this.items[i].text.getElement()).css("max-width", (maxItemWidth-5)+"px");
			
			$(this.panels[i].getElement()).css("min-width", maxItemWidth+"px");
		}
	}
	
};

com.castis.TabBar.ITEM_MAX_WIDTH = 88;
com.castis.TabBar.ITEM_MARGIN = 2;
com.castis.TabBar.MAX_ITEM_SIZE = 5;