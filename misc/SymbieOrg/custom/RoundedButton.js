declare( 'SymbieOrg::custom::RoundedButton', function (use, checkState, __PACKAGE__){

	use(['Ext::ux::element::Background', 'SymbieOrg::Background::RoundedFilled'], function (){
		
		SymbieOrg.custom.RoundedButton = Ext.extend(Ext.Container, {
			
			baseClass : 'x-rounded-button',
			overCls : 'x-rounded-button-green',
			
			autoEl : 'div',
			
			displayPath : undefined,
			
			text : undefined,
			
			backgroundClass : 'SymbieOrg.Background.RoundedFilled',
			height : 30,
			
			layout : 'auto',
			
			constructor : function (config){
				
				Ext.apply(config, {
					plugins : new Ext.ux.element.Background({
						markupClass : config.backgroundClass || this.backgroundClass
					})
				});
				
				SymbieOrg.custom.RoundedButton.superclass.constructor.call(this, config);
			},
			
			
			initComponent : function (){
				SymbieOrg.custom.RoundedButton.superclass.initComponent.call(this);
				
				if (this.I18n) {
					this.text = this.text || eval(this.I18n);
					
					this.subscribe('languageChanged', this.onLanguageChanged, this);
				}
				
				this.on('afterlayout', this.adjustLineHeight, this);
			},
			
			
			adjustLineHeight : function () {
				if (this.el.getHeight() >= 3 ) this.el.applyStyles({
					'line-height' : (this.el.getHeight() - 3) + 'px'
				});
			},
			
			
			onRender : function (ct, position) {
				SymbieOrg.custom.RoundedButton.superclass.onRender.call(this, ct, position);
				
				this.el.addClass(this.baseClass);
				this.button = this.el.createChild();
				
				this.setText(this.text);
				
				this.el.on('mousedown', function () {
					this.el.addClass('x-mouse-down');
				}, this);
				
				this.el.on('mouseup', function () {
					this.el.removeClass('x-mouse-down');
				}, this);
				
				if (this.displayPath) this.el.on('click', this.dispatchHandler, this);
			},
			
			
			onLanguageChanged : function(lang){
	    		var newText = eval(this.I18n);
	    		
	    		if (newText) this.setText(newText);
			},
	
			
			dispatchHandler : function (){
				Symbie.dispatch(this.displayPath);
			},
	
			
		    setText : function(text){
		        this.text = text;
		        
		        if(this.button) {
	            	this.button.update(text);
		        }
		    }
			
		}); //eof extend
		
		Ext.reg('roundedbutton', SymbieOrg.custom.RoundedButton);
		
	}); //eof use
	
}); //eof declare