var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
if (com.castis.ListView) throw new Error("error");

com.castis.ListView = function(id){
	this.id = id;
};
com.castis.ListView.prototype = new com.castis.View();
com.castis.ListView.prototype.constructor = com.castis.ListView;
com.castis.ListView.prototype.onCreateListItem = function(index){
	
};
com.castis.ListView.prototype.onFillListItem = function(item, index){
	
};
com.castis.ListView.prototype.onClickListItem = function(e){
	
};

console.log("#5-2");
//com.castis.Interface.ensureImplements(new com.castis.ListView, com.castis.IListView);