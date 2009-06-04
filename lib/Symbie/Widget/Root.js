Class('Symbie.Widget.Root', {
    
    isa : Ext.Container,
    
    does : [ 'Symbie.Widget' ],
    
    
    after : {
        
        render : function () {
            if (this.el == Ext.getBody()) Ext.EventManager.onWindowResize(this.doLayout, this);
        }
        
    }
})
		


//		Ext.onReady(function (){
//		    Symbie.Widget.Root.applyToMarkup(Ext.getBody());
//		    
//            Ext.EventManager.onWindowResize(function () {
//                this.doLayout();
//            }, Symbie.Widget.Root);
//		    
//		});
		


//this.mask.setSize(Ext.lib.Dom.getViewWidth(true), Ext.lib.Dom.getViewHeight(true));