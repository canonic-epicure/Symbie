declare( 'Ext::ux::event::Broadcast', function (use,checkState,__PACKAGE__) {
	
	Ext.override(Ext.util.Observable, {
	
	    subscribe: function(eventName, fn, scope, o) {
	        Ext.ux.event.Broadcast.addEvents(eventName);
	        Ext.ux.event.Broadcast.on(eventName, fn, scope, o);
	    },
	    
	    publish : function() {        
	        if(Ext.ux.event.Broadcast.eventsSuspended !== true){
	            var ce = Ext.ux.event.Broadcast.events ? Ext.ux.event.Broadcast.events[arguments[0].toLowerCase()] : false;
	            if(typeof ce == "object"){
	                return ce.fire.apply(ce, Array.prototype.slice.call(arguments, 1));
	            }
	        }
	        return true;
	    },
	    
	    removeSubscriptionsFor : function(eventName) {        
	        for(var evt in Ext.ux.event.Broadcast.events) {
	            if ( (evt == eventName) || (!eventName) ) {            
	                if(typeof Ext.ux.event.Broadcast.events[evt] == "object"){
	                    Ext.ux.event.Broadcast.events[evt].clearListeners();
	                }
	            }
	        }
	    },
	    
	     hasSubscription : function (eventName) {
	     	return Ext.ux.event.Broadcast.hasListener(eventName);
	     }
	    
	});
	
	Ext.ux.event.Broadcast = new Ext.util.Observable;
	
}); //eof use