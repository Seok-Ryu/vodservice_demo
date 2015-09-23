/**
 *  
 * JS UI 컴포넌트
 * @author : sryu@castis.com
 * @version : 1.0.0
 */
 
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};



/**
 * @class 
 * 자바스크립트 파일을 불러 오기 위한 객체 정의
 * 
 */
if (com.castis.Loder) throw new Error("error");
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
			
//			this.importJavascript("component/app/ListView.js");
			
			
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

/* !important 초기 필요한 컴포넌트를 load */
//com.castis.Loder.importComponent(com.castis.Loder.REQUIRED);


/**
 * 자바스크립트에서 Interface를 사용하기 위한 객체 정의
 * 인터페이스 생성자 
 * @param {} name : 인터페이스의 이름
 * @param {} methods : 인터페이스가 가진 메소드
 */
if (com.castis.Interface) throw new Error("error");
com.castis.Interface = function(name, methods) 
{
	if(arguments.length != 2) 
	{
		throw new Error("인터페이스생성자의 아규먼트 길이가 다음과 같습니다. : " + arguments.length + " 인터페이스를 생성하기 위해 필요한 인자의 수는 2 입니다.");
	}
	this.name = name;
	this.methods = [];
	for(var i = 0, len = methods.length; i < len; i++) 
	{
		if(typeof methods[i] !== 'string') 
		{
			throw new Error("인터페이스 생성자의 메소드명은 string 타입이어야 합니다.");
		}
	this.methods.push(methods[i]);
  }
};

/*최소 2개의 아규먼트.targetClass, targetInterFace
 *인터페이스가 2개이상이 될 경우를 생각하여 아규먼트를 정의안함 */
com.castis.Interface.ensureImplements = function(object) {
    if(arguments.length < 2) {
      throw new Error("Interface.ensureImplements 메서드의 아규먼트 길이가 다음과 같습니다." + arguments.length + "아규먼트의 길이는 2 보다 커야 합니다..");
    }
    //0번은 인터페이스가 적용될 클래스
    for(var i = 1, len = arguments.length; i < len; i++) {
      var ointerface = arguments[i];
      //13-02-04 : constructor 를 못찾는 에러가 자주 발생하여 제거
      /*if(ointerface.constructor !== com.castis.Interface) {
        throw new Error("Interface.ensureImplements 메서드는 아규먼트로 두개 이상의 인테페이스 객체를 요구 합니다.");
      }*/
      for(var j = 0, methodsLen = ointerface.methods.length; j < methodsLen; j++) {
        var method = ointerface.methods[j];
        if(!object[method] || typeof object[method] !== 'function') {
          throw new Error("Interface.ensureImplements: " + ointerface.name  + " 이름으로 구현된 객체 에서 interface. Method 인 " + method + " 가 구현되어 있지 않습니다.");
        }
      }
    }
};

/**
 *  
 * AlignType 상수를 위한 객체 정의
 * 
 */
if (com.castis.AlignType) throw new Error("error");

com.castis.AlignType = {};
com.castis.AlignType.LEFT = "left";
com.castis.AlignType.RIGHT = "right";
com.castis.AlignType.CENTER = "center";
com.castis.AlignType.Start = "start";
com.castis.AlignType.End = "end";
com.castis.AlignType.STRETCH = "stretch";
com.castis.AlignType.JUSTIFY = "justify";

/**
 *  
 * component 전체에서 사용되는 static 메소드  
 * @param {} name : 인터페이스의 이름
 * @param {} methods : 인터페이스가 가진 메소드
 */
if (com.castis.Global) throw new Error("error");
com.castis.Global = {}; 
com.castis.Global.increaseId = 0;
com.castis.Global.prefixId = "auto-id-";

/**
 * element 에 클래스 이름을 추가한다
 * @param {} element : html element
 * @param {} className : 추가할 class 이름
 * @return {} : 변경전 클래스이름
 */
com.castis.Global.addClass = function(element, className)
{
	/*
	var oldclass = target.getAttribute("class");
	if(oldclass != null)
	{
		target.setAttribute("class",oldclass + " " + className);
	}
	else
	{
		target.setAttribute("class",className);
	}
	return oldclass;
	*/
	var $target = $(element);
	var oldclassName = $target.attr("class");
	if(oldclassName != null)
	{
		$target.attr("class", oldclassName + " " + className);
	}
	else
	{
		$target.attr("class", className);
	}
	
	return oldclassName; 
};
/**
 * 지정된 classname 을 제거한다
 * @param {} element : 대상 element 
 * @param {} className : 지우려는 클래스 이름
 * @return {} : 변경된 classname
 */
com.castis.Global.removeClassName = function(element, className)
{
	var $element = $(element);
	var oldclassName = $element.attr("class");
	/*classname 을 찾아내서 지움*/
	var index = oldclassName.indexOf(className);
	//클래스이름 앞에 공백이 있음으로 1 줄인다.
	var newClassName = oldclassName.substring(0,--index);
	$element.attr("class", newClassName);
	return newClassName;
};
/**
 * 프로젝트 전체에 유일한 ID 를 할당하여 전달
 * 전역변수로 press 처리 할 element 를 갖고 있기 싫어 만들은 메소드
 * @return {} : unique id
 */
com.castis.Global.getAutoIncreaseId = function()
{
	var id = com.castis.Global.prefixId + (++com.castis.Global.increaseId);
	return id;
};
/**
 * 직전에 getAutoIncreaseId로 생성한 id 를 확인한다.
 * @return {} : getAutoIncreaseId 로 생성된 id
 */
com.castis.Global.getAutoId = function()
{
	var id = com.castis.Global.prefixId + com.castis.Global.increaseId;
	return id;
};

/**
 * UI 컴포넌트의 베이스가 되는 클래스
 * @param {} className : 입력한 classname 을 갖는 element 를 생성한다.
 */
if (com.castis.Component) throw new Error("error");
com.castis.Component = function(className){
	this.parentComponent = null;
	this.childComponents = new Array();
	this.className = className;
	this.id = null;
	this.element = function(classname)
	{
		var $element = $("<div>");
		if(classname != null)
		{
			$element.attr("class", classname);
		}
		return $element[0];
	}(className);
	//element 에서 component 로 접근할 방법이 없기때문에 내부변수로 만든다. 
	//!Warning 무한루프에 빠지지 않도록 주의한다 
	this.element.component = this;
};
/**
 * 부모 컴포넌트가 없는 컴포넌트의 경우 붙일 대상을 지정한다
 * @param {} rootElement : 부모가될 element
 */
com.castis.Component.prototype.setRootElement = function(rootElement){
	//인자 element 에 모듈 element를 붙임. 최초에만 사용됨
	$(this.element).appendTo($(rootElement));
};
/**
 * 컴포넌트 element 를 반환한다
 * @return {} 
 */
com.castis.Component.prototype.getElement = function(){
	return this.element;
};
/**
 * 부모 컴포넌트를 반환한다
 * @return {}
 */
com.castis.Component.prototype.getParentComponent = function(){
	return this.parentComponent;
};
/**
 * 부모 컴포넌트를 지정한다
 * @param {} parentComponent
 */
com.castis.Component.prototype.setParentComponent = function(parentComponent){
	this.parentComponent = parentComponent;
};
/**
 * 직손 컴포넌트 배열을 반환한다. 재접근이 필요하다.
 * @return {}
 */
com.castis.Component.prototype.getChilds = function(){
	return this.childComponents;
};
/**
 * 해당 컴포넌트에 자식 컴포넌트를 붙인다.
 * @param {} childComponent : com.castis.Component 를 상속받은 객체
 */
com.castis.Component.prototype.addChild = function(childComponent){
	$(this.element).append(childComponent.getElement());	
	this.childComponents.push(childComponent);
	childComponent.setParentComponent(this);
	childComponent.afterAppend();
};
/**
 * 전체 자식을 제거한다.
 */
com.castis.Component.prototype.removeChilds = function(){
	for(var i=0; i < this.childComponents.length; i++)
	{
		var child = this.childComponents[i];
		$(child.getElement()).remove();
		delete this.childComponents[i];		
	}
};
/**
 * addchild 된 후 layout 변경이나 기타 사항이 있을 경우 override 한다  
 */
com.castis.Component.prototype.afterAppend = function(){
	/*오버라이드를 위한 함수. 필요한 경우만 오버라이드한다. addChild 된 다음에 호출된다*/
};
/**
 * 컴포넌트의 id 를 지정한다. element id 와 무관하다
 * @param {} id
 */
com.castis.Component.prototype.setId = function(id){
	this.id = id;
};
com.castis.Component.prototype.getId = function(){
	return this.id;
};
com.castis.Component.prototype.setElementId = function(id){
	$(this.element).attr("id", id);
};
/**
 * 부모중에 지정한 컴포넌트가 있는지 탐색한다
 * @param {} name : 찾으려는 부모컴포넌트 이름
 * @return {} : 부모 컴포넌트, 존재하지 않을경우 null 을 리턴
 */
com.castis.Component.prototype.findParentComponent = function(name){
	if(this.className == name)
	{
		return this;
	}
	else
	{
		if(this.parentComponent != null)
		{
			return this.parentComponent.findParentComponent(name);	
		}
		else
		{
			return null;
		}
	}
};
com.castis.Component.prototype.show = function(){
	$(this.element).show();
};
com.castis.Component.prototype.hide = function(){
	$(this.element).hide();
};
com.castis.Component.prototype.destroy = function(){	
	this.element.component = null;
	delete this.element.component;
	$(this.element).remove();
	delete this.element; 
	delete this.parentComponent;
	delete this.childComponents;
	delete this.className;
	delete this.id;
};
/**
 * 기본 컨테이너 layout 객체. item 이 가로로 정렬한다
 *  
 */
if (com.castis.HBox) throw new Error("error");
com.castis.HBox = function(){
	//!warning : prototype 함수를 통하여 부모를 호출하여 이중 호출이다.
	//그러나 해당 코드가 존재 하지 않으면 hbox 를 상속받은 vbox 에서 component 의 프로토타입을 직접 호출하지 않아
	//element 가 꼬이는 문제가 발생한다.
	com.castis.Component.apply(this, ["hbox"]);
};
com.castis.HBox.prototype = new com.castis.Component();
com.castis.HBox.prototype.constructor = com.castis.HBox;
/**
 * 가로 박스의 상,중,하 정렬, 세로박스의 좌,중,우 정렬
 * @param {} align : start, end, center, stretch 
 */
com.castis.HBox.prototype.setAlign = function(align)
{
	/*start, end, center, stretch*/
	$(this.element).css("-webkit-box-align", align);
};
/**
 * 가로박스의 좌,중,우 정렬, 세로박스의 상,중,하 정렬
 * @param {} align : start, end, center, justify
 * 
 */
com.castis.HBox.prototype.setPack = function(align)
{
	/*start, end, center, justify*/
	$(this.element).css("-webkit-box-pack", align);
};
/**
 * 해당 컴포넌트를 박스에 추가한다
 * @param {} item : component 객체를 상속받은 객체
 */
com.castis.HBox.prototype.addItem = function(item)
{
	this.addChild(item);
};
/**
 * 해당 컴포넌트배열을 박스에 추가한다
 * @param {} items : component 객체를 상속받은 객체배열
 */
com.castis.HBox.prototype.addItems = function(items)
{
	for(var i = 0; i < items.length ; i++)
	{
		this.addChild(items[i]);		
	}	
};

/**
 * 기본 컨테이너 layout 객체. item 이 세로로 정렬한다
 *  
 */
if (com.castis.VBox) throw new Error("error");
com.castis.VBox = function(){
	com.castis.Component.apply(this, ["vbox"]);
};
com.castis.VBox.prototype = new com.castis.HBox();
com.castis.VBox.prototype.constructor = com.castis.VBox;



/**
 * 박스안에 작은 layout, 비율을 지정 할 수 있다
 * panel 은 최대 1개의 item 만 가질 수 있으며 생성시에 지정 가능하다
 * @param {} item : panel 에 지정할 component 객체
 */
if (com.castis.Panel) throw new Error("error");
com.castis.Panel = function(item){
	com.castis.Component.apply(this, ["panel"]);
	this.addItem(item);
};
com.castis.Panel.prototype = new com.castis.Component();
com.castis.Panel.prototype.constructor = com.castis.Panel;
/**
 * 
 * @param {} item : panel 에 지정할 component 객체
 */
com.castis.Panel.prototype.addItem = function(item){
	/*패널은 박스와 달리 1개의 아이템만 넣을 수 있다*/
	if(item != null)
	{
		if(this.getChilds().length > 0)
		{
			this.removeChilds();
		}
		this.addChild(item);
	}
};
/**
 * 패널에 들어 있는 component 객체를 가져온다
 * @return {}
 */
com.castis.Component.prototype.getChild = function(){
	return this.childComponents[0];
};
/**
 * 비율을 지정한다
 * @param {} value : 0은 item에 맞춤 1은 빈공간을 최대한 이용하며 1이상은 비율을 의미한다
 */
com.castis.Panel.prototype.setBoxFlex = function(value){
	$(this.element).css("-webkit-box-flex", value.toString());
};



/**
 * 빈공간을 유지할때 사용하는 컴포넌트
 * 공간을 유지할 뿐 다른 역할은 하지 않는다. 보이지 않는다
 */
if (com.castis.Spacer) throw new Error("error");
com.castis.Spacer = function(){
	com.castis.Component.apply(this, ["spacer"]);
};
com.castis.Spacer.prototype = new com.castis.Component();
com.castis.Spacer.prototype.constructor = com.castis.Spacer;
/**
 * 가로 크기 지정
 * @param {} value
 */
com.castis.Spacer.prototype.setWidth = function(value){
	$(this.element).css("width", value);
};
/**
 * 세로 크기 지정
 * @param {} value
 */
com.castis.Spacer.prototype.setHeight = function(value){
	$(this.element).css("height", value);
};


/**
 * image 를 붙여 넣기 위한 컴포넌트
 * 생성시 url 을 넘겨주면 바로 적용
 * @param {} url
 */
if (com.castis.Icon) throw new Error("error");
com.castis.Icon = function(url){
	com.castis.Component.apply(this, ["icon"]);	
	this.image = null;
	this.init();
	this.setUrl(url);
	//img tag 로 인해 imgage 가 없어도 공간을 먹게 되는 문제가 생김
	if(url == null)
	{
		this.hide();	
	}	
	//this.targetDiv.style.backgroundImage = "url('component/resources/user.png')";
};

com.castis.Icon.prototype = new com.castis.Component();
com.castis.Icon.prototype.constructor = com.castis.Icon;
com.castis.Icon.prototype.init = function(){
	this.image = function (parent)
	{
		var $img = $("<img>");
		var $parent = $(parent);
		$parent.append($img);
		return $img[0];		
	}(this.element);	
};
com.castis.Icon.prototype.setAlign = function(align){
	var $targetElement = $(this.element);
	$targetElement.css("text-align", align);
};
com.castis.Icon.prototype.setUrl = function(imageUrl){
	this.show();
	if(imageUrl != null)
	{
		$(this.image).attr("src", imageUrl);
	}
};
com.castis.Icon.prototype.setOnError = function(url){
	if(url != null)
	{
		$(this.image).attr("onError", "this.src='"+url+"';");
	}
};
com.castis.Icon.prototype.show = function(){
	$(this.element).css("display", "block");
};
com.castis.Icon.prototype.hide = function(){
	$(this.element).css("display", "none");
};
com.castis.Icon.prototype.setMaskUrl = function(url){
	this.show();
	$(this.element).css("-webkit-mask-image", "url("+url+")");
};


var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
/**
 * text를 넣기 위한 컴포넌트
 * 생성시 txt 를 받을 수 있음
 * text 는 span 으로 처리
 * setsize 는 권장하지 않는다
 */
if (com.castis.InnerText) throw new Error("error");
com.castis.InnerText = function(txt){
	com.castis.Component.apply(this, ["innertext"]);	
	this.text = null;
	this.init();
	this.setText(txt);
};
com.castis.InnerText.prototype = new com.castis.Component();
com.castis.InnerText.prototype.constructor = com.castis.InnerText;
com.castis.InnerText.prototype.init = function(){
	this.text = function(parent)
	{	
		var text = document.createElement("span");
		text.innerHTML = "";
		parent.appendChild(text);	
		return text;
	}(this.element);
	
};
com.castis.InnerText.prototype.setText = function(text){
	if(text)
	{
		this.text.innerHTML = text;
	}
	else
	{
		this.text.innerHTML = " ";
	}
};
com.castis.InnerText.prototype.getText = function(){
	return this.text.innerHTML;
};
com.castis.InnerText.prototype.setAlign = function(align){
	this.element.style.textAlign = align;
};
com.castis.InnerText.prototype.setSize = function(size){
	this.text.style.fontSize = size;
};
com.castis.InnerText.prototype.setColor = function(color){
	$(this.text).css("color", color);
};

/**
 * 여러줄의 text를 넣기 위한 컴포넌트
 * 생성시 txt 를 받을 수 있음
 * text 는 p 으로 처리
 */
if (com.castis.MultiLineText) throw new Error("error");
com.castis.MultiLineText = function(txt){
	com.castis.Component.apply(this, ["multi-line-text"]);	
	this.init();
	this.setText(txt);
};
com.castis.MultiLineText.prototype = new com.castis.Component();
com.castis.MultiLineText.prototype.constructor = com.castis.MultiLineText;
com.castis.MultiLineText.prototype.init = function(){
	this.text = function(parent)
	{	
		var text = document.createElement("p");
		parent.appendChild(text);	
		return text;
	}(this.element);
	
};
com.castis.MultiLineText.prototype.setText = function(text){
	if(text)
	{
		this.text.innerHTML = text;
	}
	else
	{
		this.text.innerHTML = " ";
	}	
};
com.castis.MultiLineText.prototype.getText = function(){
	return this.text.innerHTML;
};
com.castis.MultiLineText.prototype.setAlign = function(align){
	this.element.style.textAlign = align;
};
com.castis.MultiLineText.prototype.setColor = function(color){
	$(this.text).css("color", color);
};


/**
 * 버튼 컴포넌트
 * 현재 div 엘리멘트를 사용중이나 button 엘리멘트로 으로 변경할 계획을 가지고 있음
 */
if (com.castis.Button) throw new Error("error");

com.castis.Button = function(text){
	com.castis.Component.apply(this, ["button"]);
	this.type = "normal";
	this.isBubble = true;
	this.value = null;
	this.icon = new com.castis.Icon();
	this.text = new com.castis.InnerText(text);
	//구조 컨테이너
	this.hbox = new com.castis.HBox();
	this.panels = new Array(2);
	this.init();
};
com.castis.Button.prototype = new com.castis.Component();
com.castis.Button.prototype.constructor = com.castis.Button;
com.castis.Button.prototype.init = function(){	
	//구조 만들기
	for(var i = 0; i < this.panels.length; i++)	
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
	
	this.hbox.addItems(this.panels);
	this.addChild(this.hbox);
	
	//클래스 이름 추가
	com.castis.Global.addClass(this.text.getElement(), "button-label");
	com.castis.Global.addClass(this.icon.getElement(), "button-icon");
	//마우스 리스너
	this.enable();
};
/**
 * 버튼 UI 타입을 지정, back 은 구현 예정
 * @param {} type : normal, decline, confirm 을 사용 할 수 있다.
 */
com.castis.Button.prototype.setUiType = function(type){
	/*normal, decline, confirm, back*/
	this.type = type;
	$(this.element).attr("class", (this.className + " " + this.type));
};
/**
 * 버튼속에 hidden 으로 감춰 두고 싶은 값을 지정
 * @param {} value
 */
com.castis.Button.prototype.setValue = function(value)
{
	this.value = value;
};
com.castis.Button.prototype.getValue = function()
{
	return this.value;
};
com.castis.Button.prototype.setText = function(text)
{
	this.text.setText(text);
};
com.castis.Button.prototype.getText = function(){
	return this.text.getText();
};
com.castis.Button.prototype.setIconUrl = function(url){
	this.icon.setUrl(url);
	/*//icon 의 width 를 구함
	var $icon = $(this.icon.getTargetElement());	
	var iconWidth = $icon.css("width");
	//innertext width 구함
	var $innerText = $(this.text.getTargetElement());
	var textWidth = $innerText.css("width"); 
	$innerText.css("width", (textWidth-iconWidth));*/
};
com.castis.Button.prototype.enable = function(){
	$(this.element).bind("mousedown", this.mousePressListener);
	$(this.element).bind("click", this.mouseClickListener);
};
com.castis.Button.prototype.disable = function(){
	$(this.element).unbind("mousedown", this.mousePressListener);
	$(this.element).unbind("click", this.mouseClickListener);
};
com.castis.Button.prototype.show = function(){
	$(this.element).css("opacity", "100");
};
com.castis.Button.prototype.hide = function(){
	$(this.element).css("opacity", "0");
};
com.castis.Button.prototype.showText = function(){
	$(this.text.getParentComponent().getElement()).css("display", "block");
};
com.castis.Button.prototype.hideText = function(){
	$(this.text.getParentComponent().getElement()).css("display", "none");
};
com.castis.Button.prototype.showIcon = function(){
	$(this.icon.getParentComponent().getElement()).css("display", "block");
};
com.castis.Button.prototype.hideIcon = function(){
	$(this.icon.getParentComponent().getElement()).css("display", "none");
};
/**
 * 아이콘의 위치를 버튼 왼쪽과 오른쪽중 선택 할 수 있다.
 * @param {} align : left, right
 */
com.castis.Button.prototype.setIconAlign = function(align){
	/*left, right*/
	if(align == com.castis.AlignType.LEFT)
	{
		$(this.hbox.getElement()).css("-webkit-box-direction", "normal");
	}
	else if(align == com.castis.AlignType.RIGHT)
	{
		$(this.hbox.getElement()).css("-webkit-box-direction", "reverse");		
	}
	
};
com.castis.Button.prototype.setTextAlign = function(align){
	this.text.setAlign(align);
};
/**
 * 버튼 클릭이벤트를 받기 위한 핸들러를 설정
 * @param {} handler
 */
com.castis.Button.prototype.setClickHandler = function(handler){
	$(this.element).bind("JSClick", handler);
};
/**
 * 버블링을 사용하도록 설정
 * 
 */
com.castis.Button.prototype.enableBubble = function(){
	this.isBubble = true;
};
/**
 * 버블링을 사용하지 않도록 설정
 */
com.castis.Button.prototype.disableBubble = function(){
	this.isBubble = false;
};
com.castis.Button.prototype.checkBubble = function(e){
	if(!this.isBubble)
	{
		e.stopPropagation();
	}
};
com.castis.Button.prototype.mouseClickListener = function(e){
	/*여기서 this 는 button.element 이다
	 *event target 에 실려가는것은 이벤트가 발생한 버튼 모듈(컴포넌트) 객체이다.
	 * */
//	console.log("btn clk");
	this.component.checkBubble(e);
	var clickEvent = jQuery.Event("JSClick");
	clickEvent.target = this.component;
	$(this).trigger(clickEvent);
};
com.castis.Button.prototype.mousePressListener = function(e){
	/*1. press처리를 하고
	2. 윈도우 up 핸들러를 설정한다
	3. 윈도우 업이 발생하면 핸들러에서 프레스를 제거하고
	4. 리스너를 지운다*/
	this.component.checkBubble(e);
	com.castis.Global.addClass(this, com.castis.Button.PRESS_CLASS);
	var id = com.castis.Global.getAutoIncreaseId();
	$(this).attr("id", id);
	//한번 사용하면 지우는 리스너
	$(window).one("mouseup", this.component.mouseUpListener);
//	window.addEventListener("mouseup", this.component.setUpListener, false);
};
com.castis.Button.prototype.mouseUpListener = function(e){
	var id = "#"+com.castis.Global.getAutoId();
	com.castis.Global.removeClassName($(id)[0],com.castis.Button.PRESS_CLASS);
//	window.removeEventListener("mouseup", this.component.setUpListener, false);
};

com.castis.Button.PRESS_CLASS = "button-pressing";
com.castis.Button.UI_TYPE_NORMAL = "normal";
com.castis.Button.UI_TYPE_DECLINE = "decline";
com.castis.Button.UI_TYPE_CONFIRM = "confirm";


/**
 * 눌린 상태를 유지 하는 버튼
 * 탭모듈에서 사용 하며 
 * 차후 토글버튼 같은것을 구현 할 때 사용할 예정
 */
if (com.castis.SegmentButton) throw new Error("error");			
com.castis.SegmentButton = function(text){
	com.castis.Component.apply(this, ["segmentbutton"]);
	
	//자바스크립트에서 함수이름과 변수이름이 같으면 변수를 참조함!!
	this.isPress = false;
	this.icon = new com.castis.Icon();
	this.text = new com.castis.InnerText(text);
	//구조 컨테이너
	this.vbox = new com.castis.VBox();
	this.panels = new Array(2);
	
	this.init();	
};
com.castis.SegmentButton.prototype = new com.castis.Button();
com.castis.SegmentButton.prototype.constructor = com.castis.SegmentButton;
com.castis.SegmentButton.prototype.init = function(){
	for(var i = 0; i < this.panels.length; i++)	
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
	this.vbox.addItems(this.panels);
	this.addChild(this.vbox);	
	
	//클래스 이름 추가
	com.castis.Global.addClass(this.text.getElement(), "segmentbutton-label");
	com.castis.Global.addClass(this.icon.getElement(), "segmentbutton-icon");
	
	//icon mask 로 인해 마스크 색상이(css에서 설정) 보여짐으로, 디폴트로 visible 을 꺼버림
//	this.icon.hide();
	//이벤트 걸러내기
	$(this.element).bind("click", this.mouseClickListener);
};

com.castis.SegmentButton.prototype.setType = function(type){
	/*override*/
};
com.castis.SegmentButton.prototype.setIconUrl = function(url){
	//icon mask 화면에 표시
	this.icon.setMaskUrl(url);
};
com.castis.SegmentButton.prototype.setIconAlign = function(align){
	/*override*/
};
/**
 * 눌린 상태인지 확인
 * @return {} : boolean
 */
com.castis.SegmentButton.prototype.isPressed = function(){
	return this.isPress;
};
/**
 * 눌림 상태를 설정
 * @param {} flag : boolean
 */
com.castis.SegmentButton.prototype.setPressed = function(flag){
	this.isPress = flag;
	if(this.isPress)
	{
		this.active();
	}
	else
	{
		this.unActive();	
	}	
};
/**
 * 눌린 상태를 toggle
 */
com.castis.SegmentButton.prototype.toggle = function(){
	if(this.isPress)
	{
		this.setPressed(false);		
	}
	else
	{
		this.setPressed(true);
	}
};
/**
 * 눌린 상태에서 할일
 */
com.castis.SegmentButton.prototype.active = function(){
	com.castis.Global.addClass(this.element, com.castis.SegmentButton.PRESS_CLASS);	
};
/**
 * 눌리지 않은 상태에 할일
 */
com.castis.SegmentButton.prototype.unActive = function(){
	com.castis.Global.removeClassName(this.element, com.castis.SegmentButton.PRESS_CLASS);	
};
/**
 * 외부 핸들러
 * @param {} handler
 */
com.castis.SegmentButton.prototype.setClickHandler = function(handler){
	$(this.element).bind("JSClick", handler);
};
com.castis.SegmentButton.prototype.mouseClickListener = function(e){
	/*여기서 this 는 button.element 이다
	 *event target 에 실려가는것은 이벤트가 발생한 버튼 모듈(컴포넌트) 객체이다.
	 * */
	var segbtn = this.component;
	//이미 눌려있는 상태면 리턴
	if(segbtn.isPressed()) return;
		
	var clickEvent = jQuery.Event("JSClick");
	clickEvent.target = segbtn;
	$(this).trigger(clickEvent);
};
com.castis.SegmentButton.PRESS_CLASS = "segment-pressed";


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
com.castis.TabBar.prototype.afterAppend = function(){
	//tabbar 의 위치 잡기
	var windowHeight = window.innerHeight;
	var tabbarHeight = parseInt($(this.hbox.getElement()).css("height"));
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
	return this.text.getText();	
};
com.castis.TitleBar.prototype.afterAppend = function(){
	/*타이틀바 밑에 더미공간을 두어 다음 엘리멘트가 원하는 위치에 정착하도록 도움*/
//	var titleHeight = $(this.hbox.getElement()).css("height");
//	this.spacer.setHeight(titleHeight);
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

/**
 * 리스트 아이템을 구성하는 기초 아이템이다. layout 은 없다
 * 각 아이템은 리스트아이템을 상속받아 구현한다
 */
if (com.castis.ListItem) throw new Error("error");
com.castis.ListItem = function(){
	com.castis.Component.apply(this, ["listitem"]);
	this.value = undefined;
};
com.castis.ListItem.prototype = new com.castis.Component();
com.castis.ListItem.prototype.constructor = com.castis.ListItem;
/**
 * 리스트가 가지는 hidden 값 설정, ex : data
 * @param {} value
 */
com.castis.ListItem.prototype.setValue = function(value){
	this.value = value;
};
com.castis.ListItem.prototype.getValue = function(){
	return this.value;
};
com.castis.ListItem.prototype.mouseClickListener = function(e){
	var clickEvent = jQuery.Event("JSClick");
	clickEvent.target = this.component;
	$(this).trigger(clickEvent);
};
/**
 * item 에서 발생하는 이벤트의 핸들러 설정. 리스트 정의해서 사용하며 사용자는 사용할 필요가 없다
 * @param {} handler
 */
com.castis.ListItem.prototype.setClickHandler = function(handler){
	$(this.element).bind("JSClick", handler);
};
com.castis.ListItem.prototype.mousePressListener = function(e){
	
	var id = com.castis.Global.getAutoIncreaseId();
	$(this).attr("id", id);
	var listItem = this.component;
	$(window).one("mouseup", listItem.mouseUpListener);
	
	$(this).toggleClass(com.castis.ListItem.PRESS_CLASS);
};
com.castis.ListItem.prototype.mouseUpListener = function(e){
	var id = "#"+com.castis.Global.getAutoId();
//	com.castis.Global.removeClassName($(id)[0],com.castis.ListItem.pressString);
	$(id).toggleClass(com.castis.ListItem.PRESS_CLASS);
};
com.castis.ListItem.PRESS_CLASS = "list-pressing";


/**
 * 텍스트 필드 1개를 갖고 있는 리스트아이템
 * 
 */
if (com.castis.TextListItem) throw new Error("error");
com.castis.TextListItem = function(){
	com.castis.Component.apply(this, ["listitem"]);	 
	//레이아웃 재료
	this.itemLength = undefined;
	this.hbox = undefined;
	this.panels = undefined;
	this.text = undefined;
	
	this.beforeMake();
	this.makeItem();
	this.afterMake();
};
com.castis.TextListItem.prototype = new com.castis.ListItem();
com.castis.TextListItem.prototype.constructor = com.castis.TextListItem;
com.castis.TextListItem.prototype.beforeMake = function(){
	//레이아웃 재료
	this.itemLength = 1;
	this.hbox = new com.castis.HBox();
	this.panels = new Array();	
	this.text = new com.castis.InnerText();
	com.castis.Global.addClass(this.element, "text-listitem");
	com.castis.Global.addClass(this.text.getElement(), "list-text");
};
com.castis.TextListItem.prototype.makeItem = function(){
	for(var i = 0; i < this.itemLength; i++)	
	{
		this.panels[i] = new com.castis.Panel();
		this.panels[i].addItem(this.text);
		this.panels[i].setBoxFlex(1);
	}
};
com.castis.TextListItem.prototype.afterMake = function(){
	this.hbox.addItems(this.panels);
//	this.hbox.setAlign("center");
	this.addChild(this.hbox);
	this.setMoustEvent();
};
com.castis.TextListItem.prototype.setMoustEvent = function(){
	//이벤트
	var target = this.element;
	$(target).bind("mousedown", this.mousePressListener);
	$(target).bind("click", this.mouseClickListener);
};
com.castis.TextListItem.prototype.setText = function(text){
	this.text.setText(text);
};


/**
 * 우측에 1개의 버튼을 가진 리스트아이템
 */
if (com.castis.ButtonListItem) throw new Error("error");

com.castis.ButtonListItem = function(){
	this.button = undefined;
	//상위생성자에서 buttonlistitem 의 메소드에 접근하는데 button 이 없으면 에러임으로 super를 나중에 불러줌
	this.superclass(arguments);
//	com.castis.Component.apply(this, ["listitem"]);
	
//	
//	this.beforeMake();
//	this.makeItem();
//	this.afterMake();
//	com.castis.Global.addClass(this.element, "buttonlistitem");
};
com.castis.ButtonListItem.prototype = new com.castis.TextListItem();
com.castis.ButtonListItem.prototype.constructor = com.castis.ButtonListItem;
com.castis.ButtonListItem.prototype.superclass = com.castis.TextListItem;

com.castis.ButtonListItem.prototype.beforeMake = function(){
	com.castis.TextListItem.prototype.beforeMake.apply(this);
	//상위에서 없는것만 추가로 실행
	this.itemLength = 2;
	this.button = new com.castis.Button();
	this.button.disableBubble();
	com.castis.Global.addClass(this.element, "button-listitem");
};
com.castis.ButtonListItem.prototype.makeItem = function(){
	for(var i = 0; i < this.itemLength; i++)	
	{
		var item = undefined;
		this.panels[i] = new com.castis.Panel();
		
		if(i == 0)
		{
			item = this.text;
			this.panels[i].setBoxFlex(1);
		}
		else if(i == 1)
		{
			item = this.button;
			//icon 만 있을경우 레이아웃을 깨져서 임시로 숨김. 텍스트를 설정하면 보이도록 함
			item.hideText();
		}
		
		this.panels[i].addItem(item);		
	}
};
com.castis.ButtonListItem.prototype.setButtonText = function(text){
	this.button.showText();
//	this.button.setIconUrl("");
	this.button.setText(text);
};
com.castis.ButtonListItem.prototype.setButtonIconUrl = function(url){
	this.button.setIconUrl(url);
};
com.castis.ButtonListItem.prototype.getButton = function(){
	return this.button;
};

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

/**
 * 사용자 정의 리스트 아이템
 * list에 list item 을 설정할때 
 * custombox 에 원하는 모양을 만들어 던져주어 사용한다 
 */
if (com.castis.CustomListItem) throw new Error("error");
com.castis.CustomListItem = function(){
	com.castis.Component.apply(this, ["listitem"]);
	this.customBox = undefined;
	this.beforeMake();
	this.makeItem();
	this.afterMake();
};
com.castis.CustomListItem.prototype = new com.castis.ListItem();
com.castis.CustomListItem.prototype.constructor = com.castis.CustomListItem;

com.castis.CustomListItem.prototype.setCustomBox = function(customBox){
	/* 리스트로 만들어질 내용을 hbox가 루트로 가도록 하여 전달 하여야함*/
//	this.hbox = customBox;
	this.customBox = customBox;
	this.addChild(this.customBox);
};
com.castis.CustomListItem.prototype.getCustomBox = function(){
	return this.customBox;
};
com.castis.CustomListItem.prototype.beforeMake = function(){
	com.castis.Global.addClass(this.element, "custom-listitem");
};
com.castis.CustomListItem.prototype.makeItem = function(){
	
};
com.castis.CustomListItem.prototype.afterMake = function(){
	//이벤트
	$(this.element).bind("mousedown", this.mousePressListener);
	$(this.element).bind("click", this.mouseClickListener);
};


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


/**
 * 사용자의 입력을 받기 위한 input field
 * TYPE_TEXT TYPE_PASSWORD TYPE_NUMBER TYPE_EMAIL TYPE_TEL TYPE_URL TYPE_HIDDEN TYPE_SEARCH
 * 생성자로 type 을받으며 default text이다.
 */
if (com.castis.InputText) throw new Error("error");
com.castis.InputText = function(type){
	com.castis.Component.apply(this, ["inputtext"]);
	this.hbox = undefined;
	this.label = undefined;
	this.panels = new Array(4);
	this.intputBox = undefined;
	this.inputElement = undefined;
	this.clearButton = undefined;
	this.inputType = (type == null)? com.castis.InputText.TYPE_TEXT : type;
	this.init();
};

com.castis.InputText.prototype = new com.castis.Component();
com.castis.InputText.prototype.constructor = com.castis.InputText;
com.castis.InputText.prototype.init = function(){
	this.hbox = new com.castis.HBox();
	this.label = new com.castis.InnerText();
	com.castis.Global.addClass(this.label.getElement(), "input-label");
	for(var i=0,max=this.panels.length; i < max; i++)
	{
		this.panels[i] = new com.castis.Panel();	
	}
	this.intputBox = new com.castis.HBox();
	this.inputElement = (function(type)	{
		var $element = $("<input type="+type+">");
//		$element.attr("type", this.inputType);
		$element.attr("class", "inputfield");
		$element.attr("autocapitalize", "off");
		return $element[0];
	}(this.inputType));
	this.clearButton = new com.castis.Button();
	this.clearButton.setClickHandler(this.onClickClear);
	this.clearButton.setIconUrl("component/resources/clear_icon.png");
	this.clearButton.hideText();
	com.castis.Global.addClass(this.clearButton.getElement(), "clear-button");
	$(this.inputElement).bind("keydown", function(e){if(e.keyCode == 13) this.blur();});
	$(this.inputElement).bind("change", this.onChangedValue);
	this.layout();
};
com.castis.InputText.prototype.layout = function(){
	//라벨을 입력하지 않으면 라벨부분이 보여지지 않는다.
	this.panels[0].addItem(this.label);
	$(this.panels[0].getElement()).hide();
	//!!!Warning!!! HTML Element를 직접 붙여줌
	this.panels[1].getElement().appendChild(this.inputElement);
	this.panels[2].addItem(this.clearButton);
	this.hbox.addItems([this.panels[0],this.panels[1], this.panels[2]]);
	this.addChild(this.hbox);
};
com.castis.InputText.prototype.onChangedValue = function(e){
		
};
/**
 * 인풋필드의 라벨을 설정
 * @param {} text
 */
com.castis.InputText.prototype.setLabel = function(text){
	this.label.setText(text);
	$(this.panels[0].getElement()).show();
};
/**
 * 초기값으로 보여질 홀더를 설정
 * @param {} text
 */
com.castis.InputText.prototype.setPlaceHolder = function(text){
	$(this.inputElement).attr("placeholder", text);
};
com.castis.InputText.prototype.onClickClear = function(e){
	var inputComponent = e.target.getParentComponent().getParentComponent().getParentComponent();
	inputComponent.clearText();
};
com.castis.InputText.prototype.clearText = function(){
//	var inputComponent = e.target.getParentComponent().getParentComponent().getParentComponent();
//	console.log(inputComponent.getValue());
	$(this.inputElement).val("");
};
/**
 * form 의 name 을 설정. 서버와 연동시 사용
 * @param {} name
 */
com.castis.InputText.prototype.setName = function(name){
	$(this.inputElement).attr("name", name);
};
/**
 * 인풋에 입력된 값을 반환
 * @return {}
 */
com.castis.InputText.prototype.getValue = function(){
	return $(this.inputElement).val();
};
com.castis.InputText.prototype.setType = function(type){
//	$(this.inputElement).attr("type", type);
	this.inputElement.setAttribute("type", type);
};

com.castis.InputText.TYPE_TEXT = "text";
com.castis.InputText.TYPE_PASSWORD = "password";
com.castis.InputText.TYPE_NUMBER = "number";
com.castis.InputText.TYPE_EMAIL = "email";
com.castis.InputText.TYPE_TEL = "tel";
com.castis.InputText.TYPE_URL = "url";
com.castis.InputText.TYPE_HIDDEN = "hidden";
com.castis.InputText.TYPE_SEARCH = "search";

/**
 * 인풋필드를 보기좋게 묶은 레이아웃적 성격이 강한 컴포넌트
 */
if (com.castis.FieldSet) throw new Error("error");
com.castis.FieldSet = function(){
	com.castis.Component.apply(this, ["fieldset"]);
	this.vbox = undefined;
	this.itembox = undefined;
	this.title = undefined;
	this.items = undefined;
	this.size = 0;
	this.comment = undefined;
	this.image = null;
	this.init();
};

com.castis.FieldSet.prototype = new com.castis.Component();
com.castis.FieldSet.prototype.constructor = com.castis.FieldSet;
com.castis.FieldSet.prototype.init = function(){
	this.vbox = new com.castis.VBox();
	this.itembox = new com.castis.VBox();
	this.title = new com.castis.InnerText();
	com.castis.Global.addClass(this.title.getElement(), "fieldset-label");
	this.items = new Array();
	this.comment = new com.castis.InnerText();
	this.layout();
};
com.castis.FieldSet.prototype.layout = function(){
	this.vbox.addItems([this.title, this.itembox]);
	this.addChild(this.vbox);
};
com.castis.FieldSet.prototype.setSize = function(size){
	this.size = size;
};
/**
 * fieldset 에 inputtext 등 form 컴포넌트를 붙인다.
 * @param {} item
 */
com.castis.FieldSet.prototype.addItem = function(item){
	this.items.push(item);
//	var boxsize = this.vbox.getChilds().length;
	this.itembox.addItems([item]);
};
/**
 * 컴포넌트 배열을 붙인다
 * @param {} items
 */
com.castis.FieldSet.prototype.addItems = function(items){
	for(var i=0, max = items.length; i < max; i++)
	{
		this.addItem(items[i]);
	}
};
/**
 * 셋의 라벨(타이틀)을 설정한다
 * @param {} text
 */
com.castis.FieldSet.prototype.setTitle = function(text){
	this.title.setText(text);
};


var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
/**
 * 팝업들의 base 클래스
 */
if (com.castis.Popup) throw new Error("error");
com.castis.Popup = function(type){
	com.castis.Component.apply(this, [type]);
	this.container = undefined;
	this.panels = new Array();
	this.items = new Array();
	this.title = undefined;
	this.message = undefined;
	this.buttons = new Array();
	this.popupType = type;
	this.targetView = undefined;
//	this.init();
};
com.castis.Popup.prototype = new com.castis.Component();
com.castis.Popup.prototype.constructor = com.castis.Popup;

com.castis.Popup.prototype.init = function(){
	/*override*/
};
com.castis.Popup.prototype.layout = function(){
	/*override*/
};
com.castis.Popup.prototype.afterLayout = function(){
	/*override*/
};
com.castis.Popup.prototype.getItem = function(){
	/*override*/
};
com.castis.Popup.prototype.beforeShow = function(){
	/*override*/
};
com.castis.Popup.prototype.afterShow = function(){
	/*override*/
};
com.castis.Popup.prototype.setTargetView = function(targetView){
	this.targetView = targetView;
};
/**
 * 팝업을 보임
 */
com.castis.Popup.prototype.show = function(){
	$(this.element).css("display", "-webkit-box");
	$("body:eq(0)").css("overflow-y", "hidden");
	$("body:eq(0)").css("background", "rgba(0, 0, 0, 0.3) center center no-repeat");
};
/**
 * 팝업을 감춤
 */
com.castis.Popup.prototype.hide = function(){
	$(this.element).css("display", "none");
	$("body:eq(0)").css("overflow-y", "auto");
	$("body:eq(0)").css("background", "none");
};
/**
 * 팝업 상단 타이틀을 설정
 * @param {} text
 */
com.castis.Popup.prototype.setTitle = function(text){
	this.title.setText(text);
};
/**
 * 팝업 내용인 메시지를 설정
 * @param {} text
 */
com.castis.Popup.prototype.setMessage = function(text){
	//span 을 사용하면 자동 줄바꿈이 되지 않아 innerText 객체를 사용하지 않음
//	(this.message.getElement()).innerHTML = text;
	$(this.message.getElement()).html(text);
};
com.castis.Popup.prototype.setButtonText = function(text, index){
//	console.log(this.item[2]);
	this.buttons[index].setText(text);
};
com.castis.Popup.prototype.setButtonhandler = function(handler, index){
	this.buttons[index].setClickHandler(this.onPopupHandler);
};
com.castis.Popup.prototype.setPopupHandler= function(handler){
	$(this.element).bind("PopupClick", handler);
};

com.castis.Popup.prototype.onPopupButtonHandler = function(e){
	var button = e.target; 
	var popup = button.findParentComponent("popup");
	
	var event = jQuery.Event("PopupClick");
	event.target = popup;
	event.buttonIndex = button.getId();
	$(popup.getElement()).trigger(event);
};
/**
 * 팝업 외부가 눌리면 팝업이 닫히 도록 설정
 * 버튼이 없는 팝업에서 주로 사용
 */
com.castis.Popup.prototype.onHider = function(){
	$(this.element).bind("click", function(e) {
				// this 는 팝업 최상단 엘리멘트임
				// e.target은 직접 클릭을 받은 엘리멘트임으로
				// 클릭된곳이 팝업 외부라면 팝업을 닫음
				if (e.target == this) {
					this.component.hide();
				}

			});
};
com.castis.Popup.prototype.offHider = function(){
	$(this.element).unbind("click");
};


var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
if (com.castis.AlertPopup) throw new Error("error");

/**
 * 메시지와 확인 버튼이 있는 팝업
 */
com.castis.AlertPopup = function(){
	this.superclass("popup");
	com.castis.Global.addClass(this.element, "alert-popup");
};
com.castis.AlertPopup.prototype = new com.castis.Popup();
com.castis.AlertPopup.prototype.constructor = com.castis.AlertPopup;
com.castis.AlertPopup.prototype.superclass = com.castis.Popup;

com.castis.AlertPopup.prototype.init = function(){
	var itemLength = 3;
	this.container = new com.castis.VBox();
	
	for(var i=0, max=itemLength; i < max; i++)
	{		
		var item = this.getItem(i);
		this.items[i] = item;
		this.panels[i] = new com.castis.Panel();
		this.panels[i].addItem(this.items[i]);
	}
	this.layout();
};

com.castis.AlertPopup.prototype.getItem = function(index){
	switch(index)
	{
		case 0:
			this.title = new com.castis.InnerText("Message");
			return this.title;
			break;
		case 1:
			this.message =  new com.castis.Component();
			return this.message;
			break;
		case 2:
			this.buttons[0] = new com.castis.Button("OK");
			this.buttons[0].setId(0);
			this.buttons[0].setClickHandler(this.onPopupButtonHandler);
			return this.buttons[0]; 
			break;
		default:
			break;
	}
};

com.castis.AlertPopup.prototype.layout = function(){
	this.container.addItems(this.panels);
	this.addChild(this.container);
	this.setRootElement(this.targetView.root);
	this.afterLayout();
};
com.castis.AlertPopup.prototype.afterLayout = function(){
	com.castis.Global.addClass(this.panels[0].getElement(), "popup-title");
	com.castis.Global.addClass(this.panels[1].getElement(), "popup-message");
	com.castis.Global.addClass(this.panels[2].getElement(), "popup-button");
	com.castis.Global.addClass(this.items[1].getElement(), "message");
	
};
com.castis.AlertPopup.prototype.afterShow = function(){
//	this.buttons[0].getElement().focus();
	$(this.buttons[0].getElement()).focus();
};

/**
 * yes no 선택을 할 수있는 팝업
 */
if (com.castis.ConfirmPopup) throw new Error("error");
com.castis.ConfirmPopup = function(){
	this.superclass("popup");
	com.castis.Global.addClass(this.element, "confirm-popup");
};
com.castis.ConfirmPopup.prototype = new com.castis.Popup();
com.castis.ConfirmPopup.prototype.constructor = com.castis.ConfirmPopup;
com.castis.ConfirmPopup.prototype.superclass = com.castis.Popup;


com.castis.ConfirmPopup.prototype.init = function(){
	var itemLength = 3;
	this.container = new com.castis.VBox();
	
	for(var i=0, max=itemLength; i < max; i++)
	{		
		var item = this.getItem(i);
		this.items[i] = item;
		this.panels[i] = new com.castis.Panel(this.items[i]);
	}
	this.layout();
};

com.castis.ConfirmPopup.prototype.getItem = function(index){
	switch(index)
	{
		case 0:
			this.title = new com.castis.InnerText("Message");
			return this.title;
			break;
		case 1:
			this.message =  new com.castis.Component();
			return this.message;
			break;
		case 2:
			var box = new com.castis.HBox();
			this.createButtonBox(box);
			return box;
			break;
		default:
			break;
	}
};



com.castis.ConfirmPopup.prototype.layout = function(){
	com.castis.AlertPopup.prototype.layout.apply(this);
};

com.castis.ConfirmPopup.prototype.createButtonBox = function(container){
	
	for(var i=0; i<3; i++)
	{
		var item;
		if(i == 0)
		{
			item = this.createButton(0);
		}
		else if(i == 1)
		{
			item = new com.castis.Spacer();
			item.setWidth("1em");
		}
		else if(i == 2)
		{
			item = this.createButton(1);
		}
		var panel = new com.castis.Panel(item);
		container.addItems([panel]);
	}
};
com.castis.ConfirmPopup.prototype.createButton = function(index){
	if(index == 0)
	{
		var text = "Yes";
	}
	else if(index == 1)
	{
		var text = "No";
	}
	var button = new com.castis.Button(text);
	button.setId(index);
	button.setClickHandler(this.onPopupButtonHandler);
	this.buttons.push(button);
	return button;
};
com.castis.ConfirmPopup.prototype.afterLayout = function(){
	com.castis.Global.addClass(this.panels[0].getElement(), "popup-title");
	com.castis.Global.addClass(this.panels[1].getElement(), "popup-message");
	com.castis.Global.addClass(this.panels[2].getElement(), "popup-button");
	com.castis.Global.addClass(this.items[1].getElement(), "message");
	this.buttons[0].getElement().focus();
};

/**
 * 사용자 입력을 받을수 있는 인풋필드가 있는 팝업
 */
if (com.castis.PromptPopup) throw new Error("error");


com.castis.PromptPopup = function(){
	this.superclass("popup");
	com.castis.Global.addClass(this.element, "prompt-popup");
};
com.castis.PromptPopup.prototype = new com.castis.Popup();
com.castis.PromptPopup.prototype.constructor = com.castis.PromptPopup;
com.castis.PromptPopup.prototype.superclass = com.castis.Popup;


com.castis.PromptPopup.prototype.init = function(){
	var itemLength = 4;
	this.container = new com.castis.VBox();
	
	for(var i=0, max=itemLength; i < max; i++)
	{		
		var item = this.getItem(i);
		this.items[i] = item;
		this.panels[i] = new com.castis.Panel(this.items[i]);
	}
	this.layout();
};

com.castis.PromptPopup.prototype.getItem = function(index){
	switch(index)
	{
		case 0:
			this.title = new com.castis.InnerText("Message");
			return this.title;
			break;
		case 1:
			this.message =  new com.castis.Component();
			return this.message;
			break;
		case 2:
			this.inputText =  new com.castis.InputText(com.castis.InputText.TYPE_TEXT);
			this.inputText.setPlaceHolder("here");
			return this.inputText;
			break;
		case 3:
			var box = new com.castis.HBox();
			this.createButtonBox(box);
			return box;
			break;
		default:
			break;
	}
};
/**
 * 인풋필드에 입력된 값을 리턴
 * @return {}
 */

com.castis.PromptPopup.prototype.getInputValue = function(){
	if(this.inputText != null)
	{
		return this.inputText.getValue();
	}
};
com.castis.PromptPopup.prototype.getInputText = function(){
	if(this.inputText != null)
	{
		return this.inputText;
	}
};
com.castis.PromptPopup.prototype.layout = function(){
	com.castis.AlertPopup.prototype.layout.apply(this);
};

com.castis.PromptPopup.prototype.createButtonBox = function(container){
	
	for(var i=0; i<3; i++)
	{
		var item;
		if(i == 0)
		{
			item = this.createButton(0);
		}
		else if(i == 1)
		{
			item = new com.castis.Spacer();
			item.setWidth("1em");
		}
		else if(i == 2)
		{
			item = this.createButton(1);
		}
		var panel = new com.castis.Panel(item);
		container.addItems([panel]);
	}
};
com.castis.PromptPopup.prototype.createButton = function(index){
	if(index == 0)
	{
		var text = "OK";
	}
	else if(index == 1)
	{
		var text = "Cancel";
	}
	var button = new com.castis.Button(text);
	button.setId(index);
	button.setClickHandler(this.onPopupButtonHandler);
	this.buttons.push(button);
	return button;
};
com.castis.PromptPopup.prototype.afterLayout = function(){
	com.castis.Global.addClass(this.panels[0].getElement(), "popup-title");
	com.castis.Global.addClass(this.panels[1].getElement(), "popup-message");
	com.castis.Global.addClass(this.panels[2].getElement(), "popup-input");
	com.castis.Global.addClass(this.panels[3].getElement(), "popup-button");
	com.castis.Global.addClass(this.items[1].getElement(), "message");
	
};
//show 한 이후에 value 를 초기화 함과 동시에 포커스
//show 이전에 하면 focus 가 사라지는 경우가 있음
com.castis.PromptPopup.prototype.afterShow = function(){
	$(this.inputText.inputElement).val("");
	$(this.inputText.inputElement).focus();
};


/**
 * 사용자가 모양을 만들수 있는 팝업
 * 커스텀 박스설정을 통해 모습을 표현한다
 */
if (com.castis.CustomPopup) throw new Error("error");
com.castis.CustomPopup = function(){
	this.superclass("popup");
	com.castis.Global.addClass(this.element, "custom-popup");
};
com.castis.CustomPopup.prototype = new com.castis.Popup();
com.castis.CustomPopup.prototype.constructor = com.castis.CustomPopup;
com.castis.CustomPopup.prototype.superclass = com.castis.Popup;


com.castis.CustomPopup.prototype.init = function(){	
	this.container = new com.castis.VBox();
	this.layout();
};
com.castis.CustomPopup.prototype.layout = function(){
	this.addChild(this.container);
	this.setRootElement(this.targetView.root);
	this.afterLayout();
};
/**
 * 사용자가 정의한 모양의 박스를 설정. vbox, hbox 등을 권장한다
 * @param {} customBox
 */
com.castis.CustomPopup.prototype.setCustomBox = function(customBox){
	this.customBox = customBox;
	this.container.addItems([this.customBox]);
};
com.castis.CustomPopup.prototype.getCustomBox = function(){
	return this.customBox;
};


/**
 * 팝업은 팝업매니저를 이용하여 사용한다
 * 생성자에는 반드시 사용하려는 뷰 객체를 넣어야한다.
 * 팝업을 사용하려는 뷰에서는 다음 메소드를 만드시 구현해야한다
 * "onCreatePopup","onPreparePopup", "onClickPopup"
 * 
 */
if (com.castis.PopupManager) throw new Error("error");
com.castis.PopupManager = function(targetView){
	if(targetView == null) throw new Error("error : 파라미터가 없습니다. 팝업을 사용하는 뷰를 전달해주세요");
	this.targetView = targetView;
	this.popups = new Array();	
};
/**
 * 해당인덱스의 팝업을 화면에 보여준다.
 * 최초 진입시에만 createpopup 이 호출되며 이후 prepare만 호출된다
 * 
 * @param {} id
 */
com.castis.PopupManager.prototype.showPopup = function(id){
	
	if(!this.popups[id])
	{
		var popup = this.targetView.onCreatePopup(id);
		popup.setTargetView(this.targetView);
		popup.init();
		popup.setId(id);
		popup.setPopupHandler(this.targetView.onClickPopup);
		this.popups[id] = popup;
	}
	//실제로 안해도 popup 을 인식하나, 오류를 줄이기 위해 작성됨
	var popup = this.popups[id];	
	this.targetView.onPreparePopup(popup, id);
	popup.show();
	popup.afterShow();
};



/**
 * 화면 하단 페이징을 할 수있는 숫자형태의 페이저를 만든다.
 * 적은 내용, 최신내용만 필요할 경우는 리스트만 사용하는것을 추천
 * 많은 리스트를 사용한다고한다면 인풋과 박스를 이용한 이동이나 다른 방법을 사용
 * 가까운 데이터에 접근성의 필요가 있다면 페이저를 사용하도록한다.
 * 생성자의 파라미터로는 전체 페이지 갯수를 받도록한다.
 * 
 * @param {} pagesize : 페이지 갯수
 * @param {} itemsize : 페이저 아이템 갯수 최대 5개
 */
if (com.castis.NumberPager)	throw new Error("error");
com.castis.NumberPager = function(pagesize, itemsize) {
	com.castis.Component.apply(this, ["number-pager"]);
	this.container = undefined;
	this.items = new Array();
	this.pageSize = (pagesize != null) ? pagesize : 1;
	this.itemSize = (itemsize != null) ? itemsize : this.setItemSize(this.pageSize);
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
	} else {
		this.itemSize = size;
	}
	return this.itemSize;
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


/**
 * 컴포넌트 사용자가 view 를 구현 할때 상속받을 뷰 객체
 * 레이아웃틀을 만들어 준다
 *  
 */
if (com.castis.View) throw new Error("error");

com.castis.View = function(view, id){
	/*뷰에서 필요한 변수 정의
	 * sample
	 * 멤버 변수
	 * this.변수이름 = 값
	 * 또는
	 * var 변수이름 = 값; 
	 * */

	if(view == null || typeof view !== 'object') return;
	this.id = id;
	this.root = undefined;
	this.containers = new Array();
	this.popupManager = new com.castis.PopupManager(view);	
	this.init();
	this.root._this = view;
};
com.castis.View.prototype.init = function(){
	/*초기화에 필요한 작업들을 실행*/
	this.createLayout();
};
com.castis.View.prototype.checkId = function(){
	var element = document.getElementById(this.id);
	if(element != null)
	{
		this.id += "_" + com.castis.View.copyViewNumber++;
	}
};
com.castis.View.prototype.createLayout = function ()
{
	var $body = $("body:eq(0)");
	var $container = $("<div>");
	$container.attr("class", "view");
	this.checkId(this.id);
	$container.attr("id", this.id);
	$container.appendTo($body);
	
	var $header = $("<header></header>");
	$header.appendTo($container);
	var $section = $("<section></section>");
	$section.appendTo($container);
	var $footer = $("<footer></footer>");
	$footer.appendTo($container);
	
	var header = new com.castis.HBox();
	header.setRootElement($header[0]);
	this.containers.push(header);

	var section = new com.castis.VBox();
	section.setRootElement($section[0]);
	this.containers.push(section);
//	var scroll = new com.castis.Scroller(section.getElement());
	
	var footer = new com.castis.HBox();
	footer.setRootElement($footer[0]);
	this.containers.push(footer);
//	
	this.root = $container[0];
};

com.castis.View.prototype.deleteView = function(){
	/*메모리에 남지 않도록 모든 것들을 제거, 리스너들도 제거*/
//	delete this.root._this;
	$(this.root).remove();
};
com.castis.View.prototype.show = function(){
	/**/
	$(this.root).css("display", "block");
};
com.castis.View.prototype.hide = function(){
	$(this.root).css("display", "none");
};

com.castis.View.copyViewNumber = 0;