declare('Ext::ux::form::ImageRadioField', function () {

	Ext.ux.form.ImageRadioField = Ext.extend(Ext.form.Radio, {
    
		iconCls : undefined,
		
		height : undefined,
	    
	    onRender : function(ct, position){
	        Ext.ux.form.ImageRadioField.superclass.onRender.call(this, ct, position);
	        
	        this.wrap.applyStyles({
	        	height : (this.height || 32) + 'px',
	        	'line-height' : (this.height || 32) + 'px'
	        });
	        
	        this.iconEl = Ext.DomHelper.insertAfter(this.imageEl,{
	            tag: 'img',
	            src: Ext.BLANK_IMAGE_URL,
	            cls: 'x-form-imageradio'
	        }, true);
	        
	        this.iconEl.addClass(this.iconCls);
	    }
	    
	});
	Ext.reg('imageradio', Ext.ux.form.ImageRadioField);
	
	
}); //eof declare