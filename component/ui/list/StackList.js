

var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
if (com.castis.StackList) throw new Error("error");


com.castis.StackList = function(owner, size){
	com.castis.Component.apply(this, ["stacklist"]);
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
com.castis.StackList.prototype = new com.castis.NormalList();
com.castis.StackList.prototype.constructor = com.castis.StackList;
