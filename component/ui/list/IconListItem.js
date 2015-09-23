var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
/**
 * 좌측에 이미지가 들어가는 리스트아이템
 */
if (com.castis.IconListItem) throw new Error("error");


com.castis.IconListItem = function(){
	this.icon = undefined;
	this.superclass(arguments);
	
};
com.castis.IconListItem.prototype = new com.castis.TextListItem();
com.castis.IconListItem.prototype.constructor = com.castis.IconListItem;
com.castis.IconListItem.prototype.superclass = com.castis.TextListItem;

com.castis.IconListItem.prototype.beforeMake = function(){
	com.castis.TextListItem.prototype.beforeMake.apply(this);
	//레이아웃 재료
	this.itemLength = 2;
	this.icon = new com.castis.Icon();
	com.castis.Global.addClass(this.element, "icon-listitem");
};
com.castis.IconListItem.prototype.makeItem = function(){
	for(var i = 0; i < this.itemLength; i++)	
	{
		var item = undefined;
		if(i == 0)
		{
			item = this.icon;
		}
		else if(i == 1)
		{
			item = this.text;
		}
		this.panels[i] = new com.castis.Panel();
		this.panels[i].addItem(item);
		this.panels[i].setBoxFlex(i);
	}
};
com.castis.IconListItem.prototype.setIconUrl = function(url){
	this.icon.setUrl(url);
};