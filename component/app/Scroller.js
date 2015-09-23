var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
if (com.castis.Scroller) throw new Error("error");


com.castis.Scroller = function(target){
	this.target = target;
	this.target.scroller = this; 
	this.startYPositon = 0;
	this.finishYPosition = 0;
	this.distance = 0;
	this.speed = 2;
	$(this.target).bind("mousedown", this.onMouseDown);
	$(this.target).bind("mouseup", this.onMouseUp);
};

com.castis.Scroller.prototype.onMouseDown = function(e){
	var scroller = e.currentTarget.scroller;
	scroller.startYPositon = e.clientY;
};
com.castis.Scroller.prototype.onMouseUp = function(e){
	var scroller = e.currentTarget.scroller;
	scroller.finishYPosition = e.clientY;
	
	scroller.distance = scroller.finishYPosition - scroller.startYPositon;
	scroller.moveScroll();
};
com.castis.Scroller.prototype.moveScroll = function(){
	
	if(this.distance > 10)
	{
		var currentPositon = $(document).scrollTop();
		$(document).scrollTop(currentPositon + (10 * this.speed));
		this.distance -= 10;
		var $scroller = $(this);
		$(function() {
		    timer = setTimeout(function () {
		    	$scroller[0].moveScroll();
		    	
			}, 10);
		});
	}
	else if(this.distance < -10)
	{
		var currentPositon = $(document).scrollTop();
		$(document).scrollTop(currentPositon - (10 * this.speed));
		this.distance += 10;
		var $scroller = $(this);
		$(function() {
		    timer = setTimeout(function () {
		    	$scroller[0].moveScroll();
		    	
			}, 10);
		});
	}
};