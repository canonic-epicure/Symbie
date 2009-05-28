declare('SymbieOrg::UnderConstruction', function (use, checkState, __PACKAGE__){

	SymbieOrg.UnderConstruction = Ext.extend(Ext.Container, {
		
		autoEl : 'div',
		
		layout : 'auto',
		
		constructor : function (config){
			SymbieOrg.UnderConstruction.superclass.constructor.call(this, config);
		},
		
		
		initComponent : function (){
			SymbieOrg.UnderConstruction.superclass.initComponent.call(this);
			
			this.on('afterlayout', this.setupInput, this);
		},
		
		
		onRender : function (ct, position) {
			SymbieOrg.UnderConstruction.superclass.onRender.call(this, ct, position);
			
			this.text = this.el.createChild({
				cls : 'medium centered'
			});
			
			this.text.update('This section is under construction');
		},
		
		
		setupInput : function () {
			this.text.center(this.el);
		}
		
		
	}); //eof extend
	
	
	Ext.reg('underconstruction', SymbieOrg.UnderConstruction);
		
}); //eof declare