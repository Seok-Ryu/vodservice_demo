/**
 *  
 * component 전체에서 사용되는 static 메소드  
 * @param {} name : 인터페이스의 이름
 * @param {} methods : 인터페이스가 가진 메소드
 */
 
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
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
/*//up 이벤트에서 press 된 엘리멘트를 알 수가 없음으로 유지해야할 필요가 있다.
com.castis.Global.buttonDownHandler = function(e)
{	
	com.castis.Global.mouseEventTarget = e.currentTarget;
	com.castis.Global.classNameBeforeMouseEvent = com.castis.Global.addClass(e.currentTarget, "button-pressed");	
};
com.castis.Global.mouseUpHandler = function(e){
	if(com.castis.Global.mouseEventTarget != undefined)
	{
		com.castis.Global.mouseEventTarget.setAttribute("class",com.castis.Global.classNameBeforeMouseEvent);
		com.castis.Global.mouseEventTarget = undefined;
	}
//	console.log(e);
};
com.castis.Global.setMouseUpEvent = function()
{
	//getContainer().addEventListener("mouseup", mouseUpEvent, false);
	//window.captureEvents(Event.MOUSEUP);
	window.addEventListener("mouseup", com.castis.Global.mouseUpHandler, false);
};*/

/*com.castis.Global.getElementId = function()
{
	var id = "x-element-" + (++com.castis.Global.elementId);
	return id;
};*/