declare( 'SymbieOrg::custom::GradientButton', function (use, checkState, __PACKAGE__){

//	use(['Ext::ux::element::Background', 'SymbieOrg::Background::RoundedFilled'], function (){
		
		SymbieOrg.custom.GradientButton = Ext.extend(Ext.Container, {
			
			baseClass : 'x-gradient-button',
			
			autoEl : 'div',
			
			displayPath : undefined,
			
			text : undefined,
			
			height : 38,
			
			inDuration : 0.5,
			outDuration : 0.5,
			inEasing : 'easeOut',
			outEasing : 'easeIn',
			
			layout : 'auto',
			
			constructor : function (config){
				
				SymbieOrg.custom.GradientButton.superclass.constructor.call(this, config);
			},
			
			
			initComponent : function (){
				SymbieOrg.custom.GradientButton.superclass.initComponent.call(this);
				
				if (this.I18n) {
					this.text = this.text || eval(this.I18n);
					
					this.subscribe('languageChanged', this.onLanguageChanged, this);
				}
				
				this.on('afterlayout', this.adjustLineHeight, this);
				
				this.addEvents('background-in', 'background-out');
				
				this.on('background-in', this.onBackgroundIn, this /*, { buffer : 0.5 }*/);
				this.on('background-out', this.onBackgroundOut, this);
			},
			
			
			adjustLineHeight : function () {
				if (this.el.getHeight() >= 3 ) this.el.applyStyles({
					'line-height' : (this.el.getHeight() - 3) + 'px'
				});
			},
			
			
			onBackgroundIn : function () {
				this.background.shift({
					easing : this.inEasing,
					opacity : 1,
					duration : this.inDuration
				});
			},
			

			onBackgroundOut : function () {
				this.background.shift({
					easing : this.outEasing,
					opacity : 0,
					duration : this.outDuration,
					callback : function () {
						this.mouse_out = false;
					},
					scope : this
				});
			},
			
			
			onRender : function (ct, position) {
				SymbieOrg.custom.GradientButton.superclass.onRender.call(this, ct, position);
				
				this.el.addClass(this.baseClass);
				this.button = this.el.createChild({
					cls : 'text'
				});
				this.background = this.el.createChild({
					cls : 'background'
				});
				
				this.setText(this.text);
				
				this.background.sequenceFx();
				
				this.el.on('mousedown', function () {
					this.el.addClass('x-mouse-down');
				}, this);
				
				this.el.on('mouseup', function () {
					this.el.removeClass('x-mouse-down');
				}, this);
				
				this.el.on('mouseover', function () {
					if (this.mouse_out) {
						this.background.stopFx();
						this.mouse_out = false;
					}
					
					if (this.mouse_in) return;
					
					this.mouse_in = true;
					
					this.fireEvent('background-in');
				}, this);
				
				this.el.on('mouseout', function () {
					this.mouse_out = true;
					this.mouse_in = false;
					
					this.fireEvent('background-out');
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
		
		Ext.reg('gradientbutton', SymbieOrg.custom.GradientButton);
		
//	}); //eof use
	
}); //eof declare