declare( 'Ext::ux::widgets::Button', function (use, checkState, __PACKAGE__){

//    use(['Ext::ux::layout::Thumbnail', 'Ext::ux::widgets::DataViewContainer', 'Ext::ux::element::Background'],function(){
	
	var override = {
		buttonSelector : '.x-imagebutton_placeholder',
		
		template : new Ext.Template('<div><div class="x-imagebutton_placeholder">{0}</div></div>'),
		
		displayPath : undefined,
		
		initComponent : function (){
			Ext.ux.widgets.myButton.superclass.initComponent.call(this);
			
			if (this.displayPath) this.setHandler(this.dispatchHandler, this);
			
			this.subscribe('languageChanged', this.onLanguageChanged, this);
		},
		
		onLanguageChanged : function(lang){
    		var newText = eval(this.I18n);
    		
    		if (newText) this.setText(newText);
		},

		dispatchHandler : function (){
			Symbie.dispatch(this.displayPath);
		},
		
	    autoWidth : function(){
	        if(this.el){
//	            this.el.setWidth("auto");
//	            if(Ext.isIE7 && Ext.isStrict){
//	                var ib = this.el.child(this.buttonSelector);
//	                if(ib && ib.getWidth() > 20){
//	                    ib.clip();
//	                    ib.setWidth(Ext.util.TextMetrics.measure(ib, this.text).width+ib.getFrameWidth('lr'));
//	                }
//	            }
	            if(this.minWidth){
	                if(this.el.getWidth() < this.minWidth){
	                    this.el.setWidth(this.minWidth);
	                }
	            }
	        }
	    },
	    
	    setText : function(text){
	        this.text = text;
	        if(this.el){
	            this.el.child(".x-imagebutton_placeholder").update(text);
	        }
	        this.autoWidth();
	    }
		
	};
	
	Ext.ux.widgets.myButton = Ext.extend(Ext.Button, override);	
	Ext.reg('mybutton', Ext.ux.widgets.myButton);
	
	Ext.ux.widgets.myToolBarButton = Ext.extend(Ext.Toolbar.Button, override);	
	Ext.reg('mytoolbarbutton', Ext.ux.widgets.myButton);
	
	
	Ext.ux.widgets.Button = Ext.extend(Ext.Container, {
		autoEl : 'div',
		
		constructor : function (config){
			config.xtype = 'mybutton';
			
			this.items = [ config ];
			
			Ext.ux.widgets.Button.superclass.constructor.call(this);
		}
	});
	Ext.reg('imagebutton', Ext.ux.widgets.Button);
		
//    }); //eof use

}); //eof declare