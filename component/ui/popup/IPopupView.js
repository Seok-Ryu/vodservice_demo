var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
if (com.castis.IPopupView) throw new Error("error");


com.castis.IPopupView = new com.castis.Interface("popupView", ["onCreatePopup","onPreparePopup", "onClickPopup"]);
/*com.castis.IPopupView.constructor = com.castis.Interface;*/ 