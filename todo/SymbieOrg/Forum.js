declare('SymbieOrg::Forum', function (use, checkState, __PACKAGE__){

	use(['Ext::ux::ManagedIFrame'], function () {
		
		SymbieOrg.Forum = Ext.extend(Ext.Container, {
			
			autoEl : 'div',
			
			slots : true,
			
			
			constructor : function (config){
				config = Symbie.Widget.preprocess.call(this,config, __PACKAGE__);
				
				Ext.apply(config, {
					
					layout : 'fit',
					height : 700,
					hideMode : 'offsets',
					
					items : [
						{
							xtype : 'iframepanel',
							stateful : true,
							id : 'symbie-org-forum',
							
							border : false,
							slot : 'forum',
							defaultSrc : '/forum'
						}
					]
				});
				
				SymbieOrg.Forum.superclass.constructor.call(this, config);
			},
			
			
			initComponent : function (){
				SymbieOrg.Forum.superclass.initComponent.call(this);
				
				this.slots.forum.on('domready', this.adjustHeight, this);
			},
			
			
			adjustHeight : function(frame){
				var fbody = frame.getBody();
				
				if (fbody.scrollHeight) {
					this.setHeight(fbody.scrollHeight + 10);
					this.slots.forum.getFrame().setHeight(fbody.scrollHeight + 10);
				}
			}
			
		}); //eof extend
		
	}); //eof use
	
}); //eof declare