var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
if (com.castis.IListView) throw new Error("error");


com.castis.IListView = new com.castis.Interface("listView", ["onCreateListItem","onFillListItem", "onClickListItem"]);
/*com.castis.IListView.constructor = com.castis.Interface;*/