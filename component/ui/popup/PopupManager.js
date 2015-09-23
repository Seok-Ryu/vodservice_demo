
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
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