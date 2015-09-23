var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
if (com.castis.Loder) throw new Error("error");

/**
 *  
 * 자바스크립트 파일을 불러 오기 위한 객체 정의
 * @author : sryu@castis.com 
 */
com.castis.Loder = function(){
	
};
/**
 * 
 * @param {} jsname : 자바스크립트 파일 경로 
 */
com.castis.Loder.importJavascript = function(jsname){	
	if(!this.isLoaded(jsname))
	{
		var script = document.createElement("script");
		script.setAttribute("src",jsname);
		
		var head = document.getElementsByTagName("head")[0];
		head.appendChild(script);
	}	
};
/**
 * 같은 스크립트를 다시 불러오는것을 방지. importJavascript 내부에서 호출한다
 * @param {} jsname : 파일경로
 * @return {Boolean} : 해당 파일이 이미 불렸다면 true 불리지 않았다면 false
 */
com.castis.Loder.isLoaded = function(jsname){
	var scripts = document.getElementsByTagName("script");
	for(var i = 0; i < scripts.length ; i++)
	{
		var scriptSrc = scripts[i].getAttribute("src");
		if(scriptSrc == jsname)
		{
			return true;
		}		
	}
	return false;
};
/**
 * 컴포넌트를 import 해주는 메소드
 * @param {} componentName : 컴포넌트 이름을 상수로 입력
 */
com.castis.Loder.importComponent = function(componentName){

	switch(componentName)
	{
		case this.REQUIRED:
			this.importJavascript("component/Global.js");
			this.importJavascript("component/Component.js");
			this.importJavascript("component/app/Scroller.js");
			this.importJavascript("component/layout/HBox.js");
			this.importJavascript("component/layout/Panel.js");
			this.importJavascript("component/layout/Spacer.js");
			this.importJavascript("component/layout/VBox.js");
			
			this.importJavascript("component/utils/AlignType.js");
			this.importJavascript("component/utils/Interface.js");
//			this.importJavascript("component/ui/list/IListView.js");
			this.importJavascript("component/app/View.js");
			
			this.importJavascript("component/app/ListView.js");
			
			
//			this.importComponent(this.NORMAL_LIST);
			break;			
		case this.ICON:
			
			this.importJavascript(this.ICON);
			break;
		case this.INNER_TEXT:
			this.importJavascript(this.INNER_TEXT);
			break;
		case this.BUTTON:
			this.importComponent(this.ICON);
			this.importComponent(this.INNER_TEXT);
			this.importJavascript(this.BUTTON);
			break;
		case this.SEGMENT_BUTTON:
			this.importComponent(this.BUTTON);
			this.importJavascript(this.SEGMENT_BUTTON);
			break;
		case this.TAB_BAR:
			this.importComponent(this.SEGMENT_BUTTON);
			this.importJavascript(this.TAB_BAR);
			break;
		case this.TITLE_BAR:
			this.importComponent(this.BUTTON);
			this.importJavascript(this.TITLE_BAR);
			break;
		case this.LIST_ITEM:			
			this.importJavascript("component/ui/list/IListItem.js");
			this.importJavascript(this.LIST_ITEM);
			break;		
		case this.TEXT_LIST_ITEM:
			this.importComponent(this.INNER_TEXT);
			this.importComponent(this.LIST_ITEM);			
			this.importJavascript(this.TEXT_LIST_ITEM);
			break;		
		case this.BUTTON_LIST_ITEM:
			this.importComponent(this.TEXT_LIST_ITEM);
			this.importComponent(this.BUTTON);
			this.importJavascript(this.BUTTON_LIST_ITEM);
			break;
		case this.ICON_LIST_ITEM:
			this.importComponent(this.ICON);
			this.importComponent(this.TEXT_LIST_ITEM);
			this.importJavascript(this.ICON_LIST_ITEM);
			break;
		case this.CUSTOM_LIST_ITEM:
			this.importComponent(this.TEXT_LIST_ITEM);
			this.importJavascript(this.CUSTOM_LIST_ITEM);
			break;
		case this.NORMAL_LIST:
			this.importComponent(this.TEXT_LIST_ITEM);
			this.importComponent(this.BUTTON_LIST_ITEM);
			this.importComponent(this.ICON_LIST_ITEM);
			this.importComponent(this.CUSTOM_LIST_ITEM);
			this.importJavascript(this.NORMAL_LIST);
			break;
		case this.STACK_LIST:
			this.importComponent(this.NORMAL_LIST);
			this.importJavascript(this.STACK_LIST);
			break;
		case this.INPUT_TEXT:
			this.importComponent(this.BUTTON);
			this.importJavascript(this.INPUT_TEXT);
			break;
		case this.FIELDSET:
			this.importComponent(this.INPUT_TEXT);
			this.importJavascript(this.FIELDSET);
			break;
		case this.POPUP:
			this.importJavascript(this.POPUP);
			break;
		case this.ALERT_POPUP:
			this.importComponent(this.POPUP);
			this.importJavascript(this.ALERT_POPUP);
			break;
		case this.CONFIRM_POPUP:
			this.importComponent(this.POPUP);
			this.importJavascript(this.CONFIRM_POPUP);
			break;	
		case this.PROMPT_POPUP:
			this.importComponent(this.POPUP);
			this.importJavascript(this.PROMPT_POPUP);
			break;	
		case this.CUSTOM_POPUP:
			this.importComponent(this.POPUP);
			this.importJavascript(this.CUSTOM_POPUP);
			break;
		case this.POPUP_MANAGER:
			this.importComponent(this.INPUT_TEXT);
			this.importComponent(this.BUTTON);
			this.importComponent(this.POPUP);
			this.importComponent(this.ALERT_POPUP);
			this.importComponent(this.CONFIRM_POPUP);
			this.importComponent(this.PROMPT_POPUP);
			this.importComponent(this.CUSTOM_POPUP);			
			this.importJavascript(this.POPUP_MANAGER);
			break;
		case this.NUMBER_PAGER:
			this.importComponent(this.SEGMENT_BUTTON);
			this.importJavascript(this.NUMBER_PAGER);
		default: 
			break;
	}
};
com.castis.Loder.REQUIRED = "required";

com.castis.Loder.ICON = "component/ui/base/Icon.js";
com.castis.Loder.INNER_TEXT = "component/ui/base/InnerText.js";
com.castis.Loder.BUTTON = "component/ui/base/Button.js";
com.castis.Loder.SEGMENT_BUTTON = "component/ui/base/SegmentButton.js";
com.castis.Loder.TAB_BAR = "component/ui/base/TabBar.js";
com.castis.Loder.TITLE_BAR = "component/ui/base/TitleBar.js";
com.castis.Loder.NUMBER_PAGER = "component/ui/base/NumberPager.js";

com.castis.Loder.LIST_ITEM = "component/ui/list/ListItem.js";
com.castis.Loder.NORMAL_LIST = "component/ui/list/NormalList.js";
com.castis.Loder.TEXT_LIST_ITEM = "component/ui/list/TextListItem.js";
com.castis.Loder.BUTTON_LIST_ITEM = "component/ui/list/ButtonListItem.js";
com.castis.Loder.ICON_LIST_ITEM = "component/ui/list/IconListItem.js";
com.castis.Loder.CUSTOM_LIST_ITEM = "component/ui/list/CustomListItem.js";
com.castis.Loder.STACK_LIST = "component/ui/list/StackList.js";

com.castis.Loder.INPUT_TEXT = "component/ui/form/InputText.js";
com.castis.Loder.FIELDSET = "component/ui/form/FieldSet.js";

com.castis.Loder.POPUP_MANAGER = "component/ui/popup/PopupManager.js";
com.castis.Loder.POPUP = "component/ui/popup/Popup.js";
com.castis.Loder.ALERT_POPUP = "component/ui/popup/AlertPopup.js";
com.castis.Loder.CONFIRM_POPUP = "component/ui/popup/ConfirmPopup.js";
com.castis.Loder.PROMPT_POPUP = "component/ui/popup/PromptPopup.js";
com.castis.Loder.CUSTOM_POPUP = "component/ui/popup/CustomPopup.js";

com.castis.Loder.VIEW = "component/app/View.js";




com.castis.Loder.importComponent(com.castis.Loder.REQUIRED);
console.log("#1");