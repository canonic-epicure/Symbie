declare( 'Symbie::LoadMask', function (use,checkState,__PACKAGE__) {
    
//    use(['Ext::ux::panel::JemplatedContainer'], function(){

	    Symbie.LoadMask = Ext.extend(Ext.util.Observable, {
	        
        	appliedTo : undefined,
	        
	        constructor: function(config) {        
	            Ext.apply(this, config);
	        }, //eof constructor
	        
	        
	        applyMask : function (component) {
	        	if (this.appliedTo /*|| component.id == 'Symbie::Widget::Root'*/) return;
	        	
	        	this.appliedTo = component.getEl();
	        	var mask = this.appliedTo.mask();
	        	
	        	var maskIcon = Ext.DomHelper.append(mask.dom, '<img src="/static/images/background/load_indicator.gif">', true);
	        	maskIcon.center(mask);
	        },
	        
	        
	        releaseMask : function () {
	        	if (!this.appliedTo) return;
	        	
	        	this.appliedTo.unmask();
	        	delete this.appliedTo;
	        }
	        
	    }); //eof extend
	    
	    Symbie.LoadMask = new Symbie.LoadMask();
    	
//    }); //eof use
        
}); //eof declare
