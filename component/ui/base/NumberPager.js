var com;
if (!com)	com = {};
if (!com.castis)	com.castis = {};
/**
 * 화면 하단 페이징을 할 수있는 숫자형태의 페이저를 만든다.
 * 적은 내용, 최신내용만 필요할 경우는 리스트만 사용하는것을 추천
 * 많은 리스트를 사용한다고한다면 인풋과 박스를 이용한 이동이나 다른 방법을 사용
 * 가까운 데이터에 접근성의 필요가 있다면 페이저를 사용하도록한다.
 * 생성자의 파라미터로는 전체 페이지 갯수를 받도록한다.
 * 화면에 표시되는 최대 갯수는 5개이다
 * 
 */
if (com.castis.NumberPager)	throw new Error("error");
com.castis.NumberPager = function(pagesize, itemsize) {
	com.castis.Component.apply(this, ["number-pager"]);
	this.container = undefined;
	this.items = new Array();
	this.pageSize = (pagesize != null) ? pagesize : 1;
	this.itemSize = (itemsize != null) ? itemsize : this.setItemSize(pageSize);
	this.usedArrow = (this.pageSize > this.itemSize) ? true : false;
	this.selectedIndex = 0;
	this.numberButtons = new Array();
	this.arrowButtons = new Array();

	this.init();
};
com.castis.NumberPager.prototype = new com.castis.Component();
com.castis.NumberPager.prototype.constructor = com.castis.NumberPager;

com.castis.NumberPager.prototype.init = function() {
	this.container = new com.castis.HBox();
	for (var i = 0, max = this.itemSize; i < max; i++) {
		this.numberButtons[i] = new com.castis.SegmentButton();
		var value = i+1;
		this.numberButtons[i].setText(value);
		this.numberButtons[i].setId(i);
		this.numberButtons[i].setValue(value);
		this.numberButtons[i].setClickHandler(this.onItemClick);
	}
	if(this.usedArrow)
	{
		for (var i = 0, max = 2; i < max; i++) {
			this.arrowButtons[i] = new com.castis.Button();
			this.arrowButtons[i].setId(i);
			this.arrowButtons[i].setClickHandler(this.onArrowClick);			
		}
	}
	this.layout();
};

com.castis.NumberPager.prototype.layout = function() {
	var items = new Array();
	if(this.usedArrow)
	{
		items.push(this.arrowButtons[0]);
		for (var i = 0; i < this.itemSize; i++) {
			items.push(this.numberButtons[i]);
		}
		items.push(this.arrowButtons[1]);
	}
	else
	{
		for (var i = 0; i < this.itemSize; i++) {
			items.push(this.numberButtons[i]);
		}	
	}
	this.container.addItems(items);
	this.addChild(this.container);

	this.numberButtons[this.selectedIndex].setPressed(true);
};
/**
 * 화면에 보여지고 싶은 페이지의 갯수 최대 5개
 * @param {} size
 */
com.castis.NumberPager.prototype.setItemSize = function(size) {
	if (size > com.castis.NumberPager.MAX_SIZE) {
		this.itemSize = com.castis.NumberPager.MAX_SIZE;
		this.usedArrow = true;
	} else {
		this.itemSize = size;
	}
};
/**
 * 전체 페이지 갯수
 * @param {} size
 */
com.castis.NumberPager.prototype.setPageSize = function(size){
	this.pageSize = size;
};
/**
 * 페이저에서 이벤트 핸들러 등록. target에는 pager객체. pageNumber에는 눌린 페이지가 출력된다
 * index 에는 페이지 넘버와 관계없이 전체 item 갯수중 눌린 index를 반환한다
 * @param {} handler
 */
com.castis.NumberPager.prototype.setClickHandler = function(handler){
	$(this.element).bind("PagerClick", handler);
};

com.castis.NumberPager.prototype.onItemClick = function(e) {
	
	var pager = e.target.findParentComponent("number-pager");
	var targetNumber = e.target.getId();
	pager.moveTargetItem(targetNumber);
	
	pager.triggerEvent(targetNumber);
};
com.castis.NumberPager.prototype.triggerEvent = function(targetNumber){
	var pager = this; 
	var clickEvent = jQuery.Event("PagerClick");
	clickEvent.target = pager;
	clickEvent.pageNumber = pager.numberButtons[targetNumber].getValue();
	clickEvent.index = targetNumber;
	$(pager.getElement()).trigger(clickEvent);
};
com.castis.NumberPager.prototype.onArrowClick = function(e){
	var pager = e.target.findParentComponent("number-pager");
	
	if(e.target.getId() == 0)
	{
		pager.moveLeftItem();
	}
	else if(e.target.getId() == 1)
	{
		pager.moveRightItem();
	}
	else
	{
		console.log("Error :: unknowon button clicked ");
	}
};
com.castis.NumberPager.prototype.moveLeftItem = function(){
	var minValue = this.numberButtons[0].getValue();
	if(minValue > 1)
	{
		for(var i=0, max = this.itemSize; i < max; i++)
		{
			var value = this.numberButtons[i].getValue();
			value -= 1;
			this.numberButtons[i].setText(value);
			this.numberButtons[i].setValue(value);
		}
		this.triggerEvent(this.selectedIndex);
	}
	else
	{
		var targetValue = this.numberButtons[this.selectedIndex].getValue();
		if(targetValue > minValue)
		{
			this.moveTargetItem(this.selectedIndex-1);
			this.triggerEvent(this.selectedIndex);
		}
		else
		{
//			console.log("Error :: 더이상 진행 할 수 없다");	
		}
		
	}
};
com.castis.NumberPager.prototype.moveRightItem = function(){
	var maxValue = this.numberButtons[this.itemSize-1].getValue();
	if(maxValue < this.pageSize)
	{
		for (var i = 0, max = this.itemSize; i < max; i++) 
		{
			var value = this.numberButtons[i].getValue();
			value += 1;
			this.numberButtons[i].setText(value);
			this.numberButtons[i].setValue(value);
		}
		this.triggerEvent(this.selectedIndex);
	}
	else
	{
		var targetValue = this.numberButtons[this.selectedIndex].getValue();
		if(targetValue < maxValue)
		{
			this.moveTargetItem(this.selectedIndex+1);
			this.triggerEvent(this.selectedIndex);
		}
		else
		{
//			console.log("Error :: 더이상 진행 할 수 없다");	
		}
		
	}
};
com.castis.NumberPager.prototype.moveTargetItem = function(newTargetId) {
	var targetIndex = newTargetId;
	this.numberButtons[this.selectedIndex].toggle();
	this.numberButtons[targetIndex].toggle();
	this.selectedIndex = targetIndex;
};
com.castis.NumberPager.MAX_SIZE = 5;
