com.castis.Loder.importJavascript("app/service/UrlCreater.js");
com.castis.Loder.importJavascript("app/model/Page.js");
com.castis.Loder.importJavascript("app/service/JsonDataParser.js");

var com;
if (!com) com = {};
if (!com.sryu) com.sryu = {};
if (!com.sryu.view) com.sryu.view = {};
if (com.sryu.view.ViewContainer) throw new Error("error");


com.sryu.view.ViewContainer = function(){
	com.castis.View.apply(this, [this,"ViewContainer"]);
	this.stringSource = com.sryu.StringValues;
	this.list = undefined;
	this.titlebar = undefined;
	this.titleText = undefined;
	
	
	this.viewManagers = new Array(2);
	for(var i = 0, max = this.viewManagers.length; i < max; i++)
	{
		this.viewManagers[i] = new com.sryu.service.ViewManager();
	}
	
	
	
	this.currentView = undefined;
	this.isFirstView = true;
	this.tabState = undefined;
};
com.sryu.view.ViewContainer.prototype = new com.castis.View();

com.sryu.view.ViewContainer.prototype.createView = function(){	
	this.createHeader();		
	this.createFooter();	
	this.createEventListener();
	this.createFirstView();
};
com.sryu.view.ViewContainer.prototype.createHeader = function(){
	this.titlebar = new com.castis.TitleBar();
	this.titlebar.setButtonText(this.stringSource.Back_Button_Text, 0);
	this.titlebar.getButton(0).hide();
	this.titlebar.setButtonClickHandler(this.onClickBackButton);	
	this.containers[0].addItem(this.titlebar);
};
com.sryu.view.ViewContainer.prototype.setTitle = function(text){
	this.titlebar.setText(text);
	this.titleText = text;
};
com.sryu.view.ViewContainer.prototype.toggleBackButton = function(){
	if(this.viewManagers[this.tabState].getLength() > 0)
	{
		this.titlebar.getButton(0).show();
	}
	else
	{
		this.titlebar.getButton(0).hide();
	}
};
com.sryu.view.ViewContainer.prototype.createFooter = function(){
	var tabbar = new com.castis.TabBar(2);
	for(var i=0; i < tabbar.getItemSize(); i++)
	{
		tabbar.setItemText(this.stringSource["Tab_Title_"+i], i);
		tabbar.setItemIconUrl(this.stringSource["Tab_Title_Icon_"+i], i);
	}
	tabbar.selectItem(0);
	tabbar.setClickHandler(this.onClickTabItem);
	this.containers[2].addItem(tabbar);
	
	this.tabState = com.sryu.view.ViewContainer.TAB_STATE_CATEGORY;
};
com.sryu.view.ViewContainer.prototype.createEventListener = function(){
	$(this.containers[1].getElement()).bind("changeView", this.onChangeView);
	$(this.containers[1].getElement()).bind("completeLoad", this.onCompleteLoad);
};
com.sryu.view.ViewContainer.prototype.createFirstView = function(){
	//뷰 컨텐츠를 담는 box 의 접근을 위한 id 를 지정
	this.containers[1].setElementId("contents-container");
	//최초 카테고리는 0번임으로 직접 정의하여 전달
	var rootCategory = {categoryId: 0, categoryName: this.stringSource.CategoryView_Title};
	
	this.nextView = new com.sryu.view.CategoryList(this, rootCategory);
	 
//	this.nextView = new com.sryu.view.SearchList(this);
	//이벤트로 들어온게 아님으로 start 로 loading 활성화
	this.viewManagers[this.tabState].animationStart();
	
};
/***********************여기부터 팝업처리  **************************/
com.sryu.view.ViewContainer.prototype.onCreatePopup = function(index){
	switch(index)
	{
		case 0:			
			return new com.castis.PromptPopup();
			break;	
		case 1:
			return new com.castis.AlertPopup();
			break;
	}
	
};
com.sryu.view.ViewContainer.prototype.onPreparePopup = function(popup, id){
	switch(id)
	{
		case 0:
			var input = popup.getInputText();
			input.setType(com.castis.InputText.TYPE_PASSWORD);
			input.setPlaceHolder("****");		
			popup.setTitle(this.stringSource.Purchase_Popup_Title);
			popup.setMessage(this.stringSource.Password_Enter_Text);
			break;
		case 1:
			popup.setTitle(this.stringSource.Purchase_Popup_Title);
			popup.setMessage(this.stringSource.Password_Error_Text);
			break;
	}
};

com.sryu.view.ViewContainer.prototype.onClickPopup = function(e){
//	console.log("팝업 번호 : " + e.target.getId());
//	console.log("버튼 번호 : " + e.buttonIndex);
	var viewContainer = document.getElementById("ViewContainer")._this;
	e.target.hide();
	
	if(e.target.getId() == 0)
	{
		if(e.buttonIndex == 0)
		{
			var password = e.target.getInputValue();
			if(password == "0000")
			{
				var assetDetailView = document.getElementById("AssetDetail")._this;
				assetDetailView.confirmPurchase();
			}
			else
			{
				
				viewContainer.popupManager.showPopup(1);
			}
		}
	}
};
/***********************여기부터 root view 의 이벤트 **************************/
com.sryu.view.ViewContainer.prototype.onClickTabItem = function(e){
	var index = e.target.getId();
	var viewContainer = document.getElementById("ViewContainer")._this;
	
	viewContainer.saveHistory();
	switch(index){
		case 0:
			viewContainer.tabState = com.sryu.view.ViewContainer.TAB_STATE_CATEGORY;
			break;
		case 1:
			viewContainer.tabState = com.sryu.view.ViewContainer.TAB_STATE_SEARCH;			
			break;
		default:
			throw new Error("탭의 인덱스 오류");
	}
	viewContainer.switchTab();
};

com.sryu.view.ViewContainer.prototype.onClickBackButton = function(event){
	
	var viewContainer = document.getElementById("ViewContainer")._this;	
	var lastPage = viewContainer.viewManagers[viewContainer.tabState].getLast();
	
	
	viewContainer.nextView = lastPage.view;
	viewContainer.nextView.remake();
	
	viewContainer.setTitle(lastPage.title);
	viewContainer.currentView.destroy();
	
	viewContainer.currentView = viewContainer.nextView;
	viewContainer.currentView.show();
	viewContainer.toggleBackButton();
};

/***********************여기부터 뷰 변경관련 이벤트 **************************/
com.sryu.view.ViewContainer.prototype.onChangeView = function(event){
	var viewContainer = document.getElementById("ViewContainer")._this;
	viewContainer.saveHistory();
	viewContainer.changeView(event.nextView, event.source);
};
com.sryu.view.ViewContainer.prototype.changeView = function(viewName, data){
	this.nextView = new com.sryu.view[viewName](this, data);
};
com.sryu.view.ViewContainer.prototype.onCompleteLoad = function(event){
	var viewContainer = document.getElementById("ViewContainer")._this;
	viewContainer.viewManagers[viewContainer.tabState].animationFinish();
	
	viewContainer.setTitle(event.titleName);
	
	if(viewContainer.isFirstView)
	{
		viewContainer.isFirstView = false;
	}
	else
	{
		viewContainer.currentView.destroy();
	}
	viewContainer.currentView = viewContainer.nextView; 
	viewContainer.currentView.show();
	viewContainer.toggleBackButton();
};
com.sryu.view.ViewContainer.prototype.saveHistory = function(){
	this.viewManagers[this.tabState].animationStart();
	var pagedata = new com.sryu.model.Page(this.titleText, this.currentView, 0);		
	this.viewManagers[this.tabState].add(pagedata);
};
com.sryu.view.ViewContainer.prototype.switchTab = function(){
	var size = this.viewManagers[this.tabState].getLength();
	if(size == 0 && this.tabState == com.sryu.view.ViewContainer.TAB_STATE_SEARCH)
	{
		this.nextView = new com.sryu.view.SearchList(this);	
	}
	else
	{
		var lastPage = this.viewManagers[this.tabState].getLast();
		this.nextView = lastPage.view;
		this.nextView.remake();
		this.nextView.sendCompleteEvent(lastPage.title);
		/*this.setTitle(lastPage.title);
		
		this.currentView.destroy();
	
	
		this.currentView = this.nextView;
		this.currentView.show();
		this.toggleBackButton();*/
	}
};
com.sryu.view.ViewContainer.TAB_STATE_CATEGORY = 0;
com.sryu.view.ViewContainer.TAB_STATE_SEARCH = 1;