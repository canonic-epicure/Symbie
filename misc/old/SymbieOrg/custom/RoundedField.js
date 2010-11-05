declare('SymbieOrg::custom::RoundedField', function (use, checkState, __PACKAGE__){

	use(['Ext::ux::element::Background', 'SymbieOrg::Background::RoundedBordered'], function (){
	
		SymbieOrg.custom.RoundedField = Ext.extend(Ext.Container, {
			
			autoEl : 'div',
			
			layout : 'auto',
			
			backgroundClass : undefined,
			height : 29,
			
			
			constructor : function (config){
				
				Ext.apply(config, {
					plugins : new Ext.ux.element.Background({
						markupClass : config.backgroundClass || 'SymbieOrg.Background.RoundedBordered'
					})
				});
				
				SymbieOrg.custom.RoundedField.superclass.constructor.call(this, config);
			},
			
			
			initComponent : function (){
				SymbieOrg.custom.RoundedField.superclass.initComponent.call(this);
				
				this.on('afterlayout', this.setupInput, this);
			},
			
			
			onRender : function (ct, position) {
				SymbieOrg.custom.RoundedField.superclass.onRender.call(this, ct, position);
				
				this.el.addClass('x-rounded-field-wrp');
				
				this.input = this.el.createChild({
					tag : 'input',
					cls : 'x-rounded-field'
				});
			},
			
			
			setupInput : function () {
				this.input.setWidth(this.el.getWidth(true));
			}
			
			
		}); //eof extend
		
		
		Ext.reg('roundedfield', SymbieOrg.custom.RoundedField);
	
	}); //eof use
	
}); //eof declare