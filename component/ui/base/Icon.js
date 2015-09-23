/**
 * image 를 붙여 넣기 위한 컴포넌트
 */
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
if (com.castis.Icon) throw new Error("error");

/**
 * 생성시 url 을 넘겨주면 바로 적용
 * @param {} url
 */
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

