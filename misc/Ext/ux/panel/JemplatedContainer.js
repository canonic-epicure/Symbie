declare( 'Ext::ux::panel::JemplatedContainer', function (use,checkState,__PACKAGE__) {
    
    use('Jemplate::I18n::phrase', function () {
    	
	    Ext.ux.panel.JemplatedContainer = Ext.extend(Ext.Container, {
	        
			autoEl : 'div',
	    	
			jemplateInstance : undefined,
	        jemplate : 'I18n.phrase',
	        data : undefined,
	        
	        updateOnLanguageChange : true,
	        
			initComponent : function (){
				Ext.ux.panel.JemplatedContainer.superclass.initComponent.call(this);
				
				if (this.updateOnLanguageChange) this.subscribe('languageChanged', this.refresh.createDelegate(this,[]), this);
			},
			
	        onRender : function(ct, position){
	            Ext.ux.panel.JemplatedContainer.superclass.onRender.apply(this, arguments);
	            
	            this.data = this.data || {};
				this.data.self = this;
				
				if (this.jemplate) (this.jemplateInstance || Jemplate).process(this.jemplate, this.data, this.el.dom);
	        },
	        
	        refresh : function (data) {
	        	if (!this.rendered) return;
	        	
	        	if (data) data.self = this;
				if (this.jemplate) (this.jemplateInstance || Jemplate).process(this.jemplate, data ? data : this.data, this.el.dom);        
	        }
	        
	        
	    }); //eof extend
	    
	    Ext.reg('jemplatedcontainer', Ext.ux.panel.JemplatedContainer);
    
    }); //eof use
	
}); //eof declare


