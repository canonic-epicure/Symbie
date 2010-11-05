declare('SymbieOrg::Download', function (use, checkState, __PACKAGE__){

	use('SymbieOrg::UnderConstruction', function () {
		
		SymbieOrg.Download = Ext.extend(Ext.Container, {
			
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
				
				SymbieOrg.Download.superclass.constructor.call(this, config);
			},
			
			
			initComponent : function (){
				SymbieOrg.Download.superclass.initComponent.call(this);
			}
			
		}); //eof extend
		
	}); //eof use
	
}); //eof declare