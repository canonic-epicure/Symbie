declare( 'SymbieOrg::custom::TabPanel', function (use,checkState,__PACKAGE__) {

	use('Ext::ux::layout::Slide', function() {
	
		SymbieOrg.custom.TabPanel = Ext.extend(Ext.TabPanel, {
			
			cls : 'transparent symbie-tabpanel',
		    
			
			constructor : function (config){
				SymbieOrg.custom.TabPanel.superclass.constructor.call(this,config);
			},
			
			
			initComponent : function () {
				var layout = this.layout;
				delete this.layout;
				
				SymbieOrg.custom.TabPanel.superclass.initComponent.call(this);
				
				if (layout) {
					this.setLayout(
						new Ext.Container.LAYOUTS[layout](this.layoutConfig)
					);
				}
				
				this.on('afterlayout', this.setupCorners, this);
			},
			
			
			onRender : function (ct, position) {
				SymbieOrg.custom.TabPanel.superclass.onRender.call(this, ct, position);
				
				var body = this.el.child('.x-tab-panel-bwrap');
				
				body.applyStyles({
	            	"position" : "relative",
	            	'z-index' : 0
				});
				
				this.cornerLeftBottom = body.createChild({
					cls : 'corner corner-left-bottom'
				});
				
				this.cornerRightBottom = body.createChild({
					cls : 'corner corner-right-bottom'
				});
				
				this.cornerRightTop = body.createChild({
					cls : 'corner corner-right-top'
				});
			},
			
			
			setupCorners : function () {
				var body = this.el.child('.x-tab-panel-bwrap');
				
				this.cornerLeftBottom.setLeftTop(-1, body.getHeight() - 15);
				this.cornerRightBottom.setLeftTop(body.getWidth() - 15, body.getHeight() - 15);
				this.cornerRightTop.setLeftTop(body.getWidth() - 15, -1);
			}
			
			,
		    // private
		    findTargets : function(e){
		        var item = null;
		        var itemEl = e.getTarget('li', this.strip);
		        if(itemEl){
		            item = this.getComponent(itemEl.id.split(this.idDelimiter)[1]);
		            if(item && item.disabled || !item){
		                return {
		                    close : null,
		                    item : null,
		                    el : null
		                };
		            }
		        }
		        return {
		            close : e.getTarget('.x-tab-strip-close', this.strip),
		            item : item,
		            el : itemEl
		        };
		    }
			
			
		}); //eof extend
		
		Ext.reg('customtabpanel', SymbieOrg.custom.TabPanel);
	
	}); //eof use
	
}); //eof declare