declare( 'Symbie::Widget::Root', function (use,checkState,__PACKAGE__) {

//	use(['Ext::ux::element::Background', 'SymbieOrg::Background::Main'], function() {

		Symbie.Widget.Root = Ext.extend( Ext.Container, {
		    
		    disableNavigation : true,
		    disableBookmarking : true,
			
			slots : true,
			
			constructor : function (config){
				config = Symbie.Widget.preprocess.call(this, config, __PACKAGE__);
				
				Ext.apply(config, {
				});
				
				Symbie.Widget.Root.superclass.constructor.call(this,config);
			}
//			,
//			
//			
////			 this.mask.setSize(Ext.lib.Dom.getViewWidth(true), Ext.lib.Dom.getViewHeight(true));
//			getWindowHeight : function() {
//				return window.innerHeight ? window.innerHeight : document.documentElement.clientHeight;
//			},
//			
//			getWindowWidth : function() {
//				return window.innerWidth ? window.innerWidth : document.documentElement.clientWidth;
//			}
			
		});
		
		Symbie.Widget.Root = new Symbie.Widget.Root();
		
		
		Ext.onReady(function (){
		    Symbie.Widget.Root.applyToMarkup(Ext.getBody());
		    
            Ext.EventManager.onWindowResize(function () {
                this.doLayout();
            }, Symbie.Widget.Root);
		    
		});
		
//	}); //eof use
	
}); //eof declare