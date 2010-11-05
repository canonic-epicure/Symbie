declare( 'Symbie::Authentication', function (use,checkState,__PACKAGE__) {
	
	use('Ext::ux::util::Cookies', function (use){
		
	    Symbie.Authentication = Ext.extend(Ext.util.Observable, {
	        
	        auth_coookie_name : undefined,
	        expire_cookie_name : undefined,
	        
	        expireNotification : undefined,
	        
	        userURL : undefined,
	        

	        userSTORE : undefined,
	        userDATA : undefined,
	        notified : undefined,
	        
	        
	        constructor: function(config) {
	            Ext.apply(this, config);
	            
            	this.user();
	        },
	        
	        
	        user : function(){
	        	if ( !this.userDATA ) {
					
//	        		this.update_expiring();
					
					this.userSTORE  = new Ext.data.Store({
						baseParams : {
							meta : true
						},
						proxy : new Ext.data.HttpProxy({
							url : this.userURL,
							sync : true
						}),						
						reader : new Ext.data.JsonReader()
					});
					
					this.userSTORE.load();
					
					this.userDATA = this.userSTORE.getAt(0) ? this.userSTORE.getAt(0).data : null;
	        	}
	        	
	        	return this.userDATA;
	        },
	        
	        
	        refresh : function (){
	        	if (this.userSTORE) {
	        		this.userSTORE.removeAll();
	        		delete this.userDATA;
	        		delete this.userSTORE;
	        	}
	        	this.user();
	        },
	        
	        
	        user_exists : function (){
	        	if (Ext.ux.util.Cookies.get(this.auth_coookie_name) !== null) {
	        		this.user();
	        		if (this.userDATA) return true;
	        	}

	        	if (this.userSTORE) {
	        		this.userSTORE.removeAll();
	        		delete this.userDATA;
	        		delete this.userSTORE;
	        	}
	        	
	        	return false;
	        },
	        
	        expire_exists : function (){
	        	if (Ext.ux.util.Cookies.get(this.expire_cookie_name) !== null) return true;
	        	
	        	this.notified = false;
	        	
	        	return false;
	        },
	        
	        
	        logout : function (dom, event){
                if (event.preventDefault) {
                    event.preventDefault();
                } else {
                    event.returnValue = false;
                }
                
                Ext.Ajax.request({
                	url : '/auth/logout',
                	sync : true
                });
                
	        	if (this.userSTORE) {
	        		this.userSTORE.removeAll();
	        		delete this.userDATA;
	        		delete this.userSTORE;
	        	}
	        	
	        	Ext.ux.util.Cookies.clear(this.auth_coookie_name);
	        	Ext.ux.util.Cookies.clear(this.expire_cookie_name);
	        	
	        	this.publish('prepare_disauthenticated');
	        	this.publish('disauthenticated');
	        }
//	        ,
//	        
//	        
//	        update_expiring : function(){
////	        	if (this.user_exists() && this.expire_exists()) {
////	        		var remain = new Date( Ext.ux.util.Cookies.get(this.expire_cookie_name) ) - new Date();
////	        		if (remain > 0 && remain < this.expireNotification && !this.notified) {
////	        			this.notified = true;
////	        			
////	        			var n = function (){
////	        				return 1;
////	        			}.defer(this);
////	        		}
////	        	}
//	        } 
	        
	        
	    }); //eof extend
	
	}); //eof use

}); //eof declare