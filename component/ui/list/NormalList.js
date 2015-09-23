
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
/**
 * 아이템을 이용하여 리스트를 만든다
 * 리스트를 사용하는 뷰에서는
 * 다음 3개의 함수를 반드시 구현해야한다.
 * "onCreateListItem","onFillListItem", "onClickListItem"
 * 생성자의 인자로 리스트를 사용할 뷰를 입력해야 하고 
 * 2번 인자는 리스트의 크기로 생략가능하다
 * 리스트 아이템은 순서대로 0부터 인덱스를 갖는다 getId로 접근가능하다
 * event 의 target 에는 리스트아이템이 전달된다
 */
if (com.castis.NormalList) throw new Error("error");


com.castis.NormalList = function(owner, size){
	com.castis.Component.apply(this, ["normallist"]);
	this.type = "text";
	if(owner == null) throw new Error("error : 파라미터가 없습니다. 리스트를 사용하는 뷰를 전달해주세요");
	/*owner 은 list 를 생성하는 클래스, 즉 view 이다*/
	this.targetView = owner;
//	com.castis.Interface.ensureImplements(this.owner, com.castis.IListView);
	//기능
	this.increaseId = undefined;
	this.data = undefined;
	this.items = new Array();
	this.itemSize = 0;
	//레이아웃
	this.vbox = new com.castis.VBox();	
	this.init(size);	
};
com.castis.NormalList.prototype = new com.castis.Component();
com.castis.NormalList.prototype.constructor = com.castis.NormalList;
com.castis.NormalList.prototype.init = function(size){
	this.addChild(this.vbox);
	if(size != null)
	{
		this.setItemSize(size);
	}
};
com.castis.NormalList.prototype.setItemSize = function(size){
	this.itemLength = size;	
};
com.castis.NormalList.prototype.getAutoId = function(){
	if(this.increaseId != undefined)
	{
		this.increaseId++;
	}
	else
	{
		this.increaseId = 0; 		
	}
	return this.increaseId;
};
com.castis.NormalList.prototype.createList = function(){
	
//	var item = this.owner.setListItem();
	for(var i = 0; i < this.itemLength; i++)
	{
		this.items[i] = this.targetView.onCreateListItem(i);
		this.items[i].setId(this.getAutoId());
		this.targetView.onFillListItem(this.items[i], i);				
	}
	this.vbox.addItems(this.items);
	$(this.element).bind("JSClick", this.targetView.onClickListItem);
};
/*
 * com.castis.NormalList.prototype.setClickHandler = function(handler){
	//버블링으로 자동으로 전달됨
	$(this.element).bind("JSClick", this.targetView.clickListItem);
};
com.castis.NormalList.prototype.setType = function(type){
	 text, icon, button, custom
	this.type = type;
}
com.castis.NormalList.prototype.itemFactory = function(){
	 text, icon, button,  custom
	switch(this.type)
	{
		case "text":
			return new com.castis.TextListItem();
		case "icon":
			return new com.castis.IconListItem();
		case "button":
			return new com.castis.ButtonListItem();
		case "custom":
			return new com.castis.CustomListItem();
		default :
			return new com.castis.TextListItem();
	}
}*/
