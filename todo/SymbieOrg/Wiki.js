declare('SymbieOrg::Wiki', function (use, checkState, __PACKAGE__){

	use('SymbieOrg::UnderConstruction', function () {
		
		SymbieOrg.Wiki = Ext.extend(Ext.Container, {
			
			autoEl : 'div',
			
			layout : 'fit',
			
			height : 700,
			
			constructor : function (config){
				config = Symbie.Widget.preprocess.call(this,config, __PACKAGE__);
				
				Ext.apply(config, {
					items : [
						{
							xtype : 'underconstruction'
						}
					]
				});
				
				SymbieOrg.Wiki.superclass.constructor.call(this, config);
			},
			
			
			initComponent : function (){
				SymbieOrg.Wiki.superclass.initComponent.call(this);
			}
			
		}); //eof extend
		
	}); //eof use
	
}); //eof declare