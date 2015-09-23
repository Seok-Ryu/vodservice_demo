
var com;
if (!com) com = {};
if (!com.sryu) com.sryu = {};
if (!com.sryu.view) com.sryu.view = {};
if (com.sryu.view.Player) throw new Error("error");


com.sryu.view.Player = function(root, assetData){
	com.sryu.view.InnerView.apply(this, [root]);
	this.subContainer.setElementId("Player");

	this.dataSource = assetData;
	this.video = undefined;
	this.createView();	
	setTimeout(function(){
				var view = document.getElementById("Player")._this;
				return view.sendCompleteEvent(view.dataSource.title);}, 300);
	this.root.viewManagers[this.root.tabState].animationStart();
};
com.sryu.view.Player.prototype = new com.sryu.view.InnerView();
com.sryu.view.Player.prototype.createView = function(){
	this.createVideoPlayer();
	this.createRatingArea();
};
com.sryu.view.Player.prototype.createVideoPlayer = function(){
	var $video = $("<video>");
	$video.attr("autobuffer", "true");
	$video.attr("poster", "app/resources/images/Koala.jpg");
//	$video.attr("controls", "true");
//	$video.attr("autoplay", "true");
	$video.attr("preload", "auto");
	var random = "?random=" + Math.floor(Math.random()*100000);
	var $source_1 = $("<source>");
//	$source_1.attr("src", "http://www.broken-links.com/tests/media/BigBuck.m4v");
	$source_1.attr("src", "app/resources/test/BigBuck.m4v"+random);
	$source_1.attr("type", "video/mp4");
	var $source_2 = $("<source>");
//	$source_2.attr("src", "http://www.broken-links.com/tests/media/BigBuck.webm");
	$source_2.attr("src", "app/resources/test/BigBuck.webm"+random);
	$source_2.attr("type", "video/webm");
	var $source_3 = $("<source>");
//	$source_3.attr("src", "http://www.broken-links.com/tests/media/BigBuck.theora.ogv");
	$source_3.attr("src", "app/resources/test/BigBuck.theora.ogv"+random);
	$source_3.attr("type", "video/ogg");
	var $warning = $("<p class='warning'>Your browser does not support HTML5 video.</p>");
	$video.append($source_1);
	$video.append($source_2);
	$video.append($source_3);
	$video.append($warning);
	
	$(this.subContainer.getElement()).append($video);
	this.video = $video[0];
	if(this.video.readyState > 0)
	{
		this.loadedmetadata.call(this.video);		
	}
	else
	{
//		this.video.addEventListener("loadedmetadata",this.loadedmetadata);
		$(this.video).bind("loadedmetadata",this.loadedmetadata);
//		 console.log(document.DOMContentLoaded)
	}
//	setTimeout(this.finishedReadData, 300);
};

com.sryu.view.Player.prototype.createRatingArea = function(){
	
};

com.sryu.view.Player.prototype.onPlayFullScreen = function(e){
	var video = e.target;
	video.play();
	if (video.requestFullscreen) {
        video.requestFullscreen();
    }
    else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    }
    else if (video.webkitRequestFullScreen) {
        video.webkitRequestFullScreen();
    }
    else if (video.webkitEnterFullScreen) {
        video.webkitEnterFullScreen();
    }
};

com.sryu.view.Player.prototype.loadedmetadata = function(e){
	console.log("loaded");	
	var view = document.getElementById("Player")._this;
	view.root.viewManagers[view.root.tabState].animationFinish();
	
//	view.sendCompleteEvent(view.dataSource.title);
	//	using.innerHTML = this.currentSrc;
	var video = this;
//	video.muted = true;
//	var $using = $("<div>");
	
//		alert(video)
//	$using.html(video.currentSrc + " 사용중");
//	($(video).parent()).append($using);
	if (video.webkitSupportsFullscreen) 
	{
		/*video.addEventListener("play", function(){
			console.log("played");
//			console.log(this);
			video.webkitEnterFullScreen();
			});*/
	   	video.addEventListener("click", function () {
	   		video.webkitEnterFullScreen();
//	   		console.log("load");
	   		video.play();
	   	});
		
//	   	video.load();
	    /*fullscreen.addEventListener('click', function () {
	    	video.webkitEnterFullScreen();
	    });
		video.play();*/
	}
};

com.sryu.view.Player.prototype.afterDestroy = function(){
/*	while(this.video.firstChild)
	{
		this.video.removeChild(this.video.firstChild);
	}*/

	$(this.video).unbind();
	$(this.video).remove();
	this.video = null;
};
com.sryu.view.Player.prototype.afterRemake = function(){
	this.root.viewManagers[this.root.tabState].animationStart();
	console.log(this.root.viewManagers[this.root.tabState])
	console.log("remake")
	this.subContainer.setElementId("Player");
	this.createView();
	
};