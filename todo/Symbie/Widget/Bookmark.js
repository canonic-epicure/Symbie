declare( 'Symbie::Widget::Bookmark', function (use,checkState,__PACKAGE__) {
    
    use([ 'Ext::ux::layout::Bookmark', 'Ext::ux::widgets::DataView' ], function(use){
        
        Ext.override(Ext.Panel, {
    	    
    	    onExpand : function(doAnim, animArg){
		        if(doAnim){
		        	this[this.collapseEl].show();
		        	this.doLayout();
		            this[this.collapseEl].slideIn(this.slideAnchor,
		                    Ext.apply(this.createEffect(animArg||true, this.afterExpand, this),
		                        this.expandDefaults));
		        }else{
		            this[this.collapseEl].show();
		            this.afterExpand();
		        }
		    }

        });
        
        Symbie.Widget.Bookmark = Ext.extend(Ext.ux.widgets.DataView, {
            
            slots : true,
            
            bookmarks : undefined,
            
            itemSelector : 'div.bookmark',
            
            activeBookmark : undefined,
            
            constructor: function (config) {
				
            	this.bookmarks = new Ext.data.Store({
            		reader : new Ext.data.JsonReader(
            			{
							totalProperty: "results",
							root: "rows",
							id : 'compId'
	            		}, 
	            		[
	            			{ name : 'title' },
	            			{ name : 'displayPath' },
	            			{ name : 'compId' }
	            		]
	            	)
            	});
                
                Ext.apply(config, {
					store : this.bookmarks,
					
					layout : 'bookmark',
					layoutConfig : {
						disableSizing : true
					},
					
					jemplate : 'Symbie.Widget.Bookmark',
					
					overClass : 'x-bookmark-over'
                }); //eof apply
                
                Symbie.Widget.Bookmark.superclass.constructor.call(this, config);
            },
            
			
            initComponent: function() {
                Symbie.Widget.Bookmark.superclass.initComponent.call(this);
                
                this.subscribe('bookmark', this.onBookmark, this);
                this.subscribe('dispatch', this.onDispatch, this);
                
                this.on('click', this.onBookmarkClick, this);
                
                this.on('add', this.onNewBookmark, this);
                
                this.subscribe('afterLanguageChanged', this.onLanguageChanged, this);
            },
            
            
            onNewBookmark : function (self, comp, index) {
//            	Ext.QuickTips.register({
//            		target : comp.el,
//            		text : '1231 asda as dahdas ',
//            		showDelay : 1,
//            		dismissDelay : 100000
//            	});
            },
            
            
            onLanguageChanged : function(lang){
            	if (this.activeBookmark) {
            		var activeIndex = this.bookmarks.indexOf( this.getRecord(this.activeBookmark.dom) );
            	}
	    		
	    		for (var i = 0; i < this.bookmarks.getCount(); i++) {
	    			var rec = this.bookmarks.getAt(i);
	    			
	    			var comp = Ext.getCmp(rec.get('compId'));
	    			var title = typeof comp.displayName == 'function' ? comp.displayName() : comp.displayName; 
	    			
	    			rec.set('title', title );
	    			rec.commit();
	    		}
	    		
	    		this.refresh();
	    		
	    		if (typeof activeIndex != 'undefined') {
            		this.activeBookmark = Ext.get(this.getNode(activeIndex));
            		
            		this.activeBookmark.addClass('active-bookmark')
	    		}
			},
            
            
            onBookmark : function (cmp, c) {
            	var pos = this.bookmarks.find('compId', cmp.id)
            	
            	if (pos == -1) {
            		var title = typeof cmp.displayName == 'function' ? cmp.displayName() : cmp.displayName;
            		
	            	this.bookmarks.loadData({
	            		rows : [
	            			{
			            		title : title,
			            		compId : cmp.id,
			            		displayPath : Symbie.Dispatcher.encodeDisplayPath(c)
	            			}
	            		]
	            	},true);
	            	
	            	this.refresh();
            	}
            },
            
            
            onDispatch : function (cmp, c){
            	var pos = this.bookmarks.find('compId', cmp.id)
            	if (pos != -1) {
            		
            		if (this.activeBookmark) {
            			this.activeBookmark.removeClass('active-bookmark')
            		}
            		
            		var node;
            		
            		for (var i = 0; i < this.all.getCount(); i++) {
            			if (this.all.item(i).dom.viewIndex == pos) {
            				node = this.all.item(i);
            				break;
            			}
            		}
            		
            		this.activeBookmark = node;
            		this.activeBookmark.addClass('active-bookmark')
            	}
            },
            
            
            onBookmarkClick : function (self, index, node, e) {
            	var rec = this.getRecord(node);
            	
            	var close = e.getTarget('.close');
            	if (close) {
            		this.bookmarks.remove(rec);
            		this.refresh();
            		return;
            	}
            	
            	if (node == this.activeBookmark.dom) return;
            	
        		if (this.activeBookmark) {
        			this.activeBookmark.removeClass('active-bookmark')
        		}
        		
        		
        		
            	Symbie.Dispatcher.dispatch(rec.data.displayPath);
            }
            
            
        }); //eof extend
        
        
        Ext.reg('bookmark', Symbie.Widget.Bookmark);
        
        
/*jmpl:Symbie.Widget.Bookmark

	<div class="bookmark">
		<div class="bookmark-background">
			<div class="bookmark-left">
			</div>
			
			<div class="bookmark-right">
			</div>
			
			<div class="bookmark-center">
			</div>
		</div>
		
		<div class="wrapper">
			<span class="title">[% title %]</span>
			
			<div class="tools">
				<div class="close">
				</div>
				<div class="gradient">
				</div>
			</div>
		</div>
	</div>

jmpl*/
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:5d31d83bdbbece0f53d036aba280711e
Jemplate.templateMap['Symbie.Widget.Bookmark']=function(context){if(!context)throw('Jemplate function called without context\n');var stash=context.stash;var output='';try{output+='\n\n	<div class="bookmark">\n		<div class="bookmark-background">\n			<div class="bookmark-left">\n			</div>\n			\n			<div class="bookmark-right">\n			</div>\n			\n			<div class="bookmark-center">\n			</div>\n		</div>\n		\n		<div class="wrapper">\n			<span class="title">';output+=stash.get('title');output+='</span>\n			\n			<div class="tools">\n				<div class="close">\n				</div>\n				<div class="gradient">\n				</div>\n			</div>\n		</div>\n	</div>\n\n';}
catch(e){var error=context.set_error(e,output);throw(error);}
return output;}
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:5d31d83bdbbece0f53d036aba280711e
        
        
        
    }); //eof use    
    
}); //eof declare