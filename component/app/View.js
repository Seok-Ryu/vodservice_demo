/**
 * 컴포넌트 사용자가 view 를 구현 할때 상속받을 뷰 객체
 * 레이아웃틀을 만들어 준다
 * @type 
 */
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
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
	console.log(this.id)
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
//	this.element._this = null;
	delete this.root._this;
	$(this.root).remove();
	delete this.root;
};
com.castis.View.prototype.show = function(){
	/**/
	$(this.root).css("display", "block");
};
com.castis.View.prototype.hide = function(){
	$(this.root).css("display", "none");
};

com.castis.View.copyViewNumber = 0;