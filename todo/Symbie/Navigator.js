declare( 'Symbie::Navigator', function (use,checkState,__PACKAGE__) {
 
    use('Ext::ux::util::Cookies', function (use){
    	
	    Symbie.Navigator = Ext.extend(Ext.util.Observable, {
	        
	        iframeId : 'navigator_ifr',
	        iframeName : 'navigator_ifr',
	        anchorId : 'navigation_anchor',
	        
	        currentTokenCookie : undefined,
	        
	        firstToken : undefined,
	        
	        constructor: function(config) {
	            this.navigatorEl = Ext.isIE ? document.createElement('<iframe name="' + this.iframeName + '"></iframe>') : document.createElement('iframe');
	            if (!Ext.isIE) this.navigatorEl.name = this.iframeName;
	            
	            this.navigatorEl = Ext.get(this.navigatorEl);
	            this.navigatorEl.applyStyles({
	            	display : 'none'
	            });
	            
	            this.skipLoad = true; //пропускаем начальную загрузку фрэйма
	            this.navigatorEl.on('load',this.restore_checkpoint,this);
	            
	            Ext.getBody().appendChild(this.navigatorEl);
	            
	//            this.docTitle = '';
	
	            Ext.apply(this, config);
	            
	            this.addEvents('checkpoint');
	        },
	        
	        
	        saveCheckPoint : function (token) {
	        	
	        	if (this.currentTokenCookie) {
	        		Ext.ux.util.Cookies.set(this.currentTokenCookie, token);
	        	}
	        	
	//                this.docTitle = docTitle;
	            this.skipLoad = true;
	            this.navigatorEl.dom.src = '/navigation?token=' + encodeURIComponent(token);
	            //} else {
	                //document.title = this.docTitle;
	            //}
	        },
	        
	        restore_checkpoint : function () {
	            if (this.skipLoad) {
	            	
	                this.skipLoad = false;
	//                if (this.docTitle) {
	//                    document.title = this.docTitle;
	//                }
	                return;
	            }
	            
	            var anchor = frames[this.iframeName].document.getElementById(this.anchorId);
	            
	            var restoredToken = anchor ? anchor.value : undefined;
	            
	        	if (this.currentTokenCookie) {
	        		Ext.ux.util.Cookies.set(this.currentTokenCookie, restoredToken);
	        	}
	            
	            
	            this.fireEvent('checkpoint', this, restoredToken);
	            
	        }
	    }); //eof extend
	    
	    
		Ext.onReady(function(){
			Symbie.Navigator = new Symbie.Navigator({
				currentTokenCookie : 'symbie_org_current_token'
			});
			
			Symbie.Navigator.subscribe('navigate', function(widget, c){
				var token = Symbie.Dispatcher.encodeDisplayPath(c);
				
				this.saveCheckPoint(token);
			}, Symbie.Navigator);
			
		
			Symbie.Navigator.on('checkpoint', function(navigator, token){
				if (token) Symbie.Dispatcher.dispatch([token], {
					disableNavigation : true,
					disableBookmarking : true
				});
			}, Symbie.Navigator);
		});
		
    }); //eof use

}); //eof declare