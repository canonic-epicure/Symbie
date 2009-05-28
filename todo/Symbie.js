declare('Symbie', function (){

	Ext.BLANK_IMAGE_URL = '/ext/resources/images/default/s.gif';
	
	Ext.Updater.defaults.loadScripts = true;
	Ext.Updater.defaults.disableCaching = true;
	
	Ext.QuickTips.init();
	
	Ext.apply(Ext.QuickTips.getQuickTip(), {
		showDelay: 1,
		dismissDelay: 100000,
		trackMouse: true
	});
	
	Symbie = {
		ajaxErrorMsg : function (el, success, response, options) {
		    Ext.Msg.alert('Ошибка', 'Ошибка загрузки данных');
		}
	};
	
	if (typeof Jemplate != 'undefined') Jemplate.init({
	    'PRE_PROCESS' : 'preprocess'
	});
	
}); //eof declare