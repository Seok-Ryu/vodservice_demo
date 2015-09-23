/**
 * UI 컴포넌트의 베이스가 되는 클래스
 */
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
if (com.castis.Component) throw new Error("error");

/**
 * 컴포넌트 생성자
 * @param {} className : 입력한 classname 을 갖는 element 를 생성한다.
 */
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