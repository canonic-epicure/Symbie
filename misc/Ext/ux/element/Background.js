declare( 'Ext::ux::element::Background', function (use,checkState,__PACKAGE__) {
    
    Ext.ux.element.Background = Ext.extend(Ext.util.Observable, {
        
        parent : undefined,
        
        itemSelector : undefined,
        
        markupClass : undefined,
        
        zindex : undefined,
        
//        skipParentRestyling : undefined, //??было нужно для IE 
        
        markupConfig : undefined,
        
        adjustedLeft : undefined,
        adjustedTop : undefined,
        adjustedWidth : undefined,
        adjustedHeight : undefined,
        
        
        markupComp : undefined,
        
        el : undefined,
        
        constructor: function(config) {        
            Ext.apply(this, config); 
        }, //eof constructor
        
        
        init: function(parent) {
            this.parent = parent;
		
            this.parent.on('render',this.onRender,this);
            this.parent.on('afterlayout',this.onAfterLayout,this);
            this.parent.on('resize',this.onAfterLayout,this);
            this.parent.on('hide',this.onHide,this);
            this.parent.on('show',this.onShow,this);            
            this.parent.on('move',this.onAfterLayout,this);
//            this.parent.on('close',this.onClose,this);
            this.parent.on('destroy',this.onClose,this);
            
            if (parent.rendered) {
            	this.onRender();
            }
        },
        
        
        getTargetEl : function () {
        	var target = this.parent.getEl();
        	
        	if (this.itemSelector) target = target.child(this.itemSelector);
        	
        	return target;
        },
        
        
        onRender : function(){
        	var target = this.getTargetEl();
        	
            if(target.getStyle("position") == "static" /*&& !this.skipParentRestyling*/){
	            target.setStyle({
	            	"position" : "relative",
	            	'z-index' : 0
	            });
	        }

            var zindex = typeof (this.zindex) != 'undefined' ? this.zindex : -1;
            
            this.el = target.createChild({
            	tag : 'div',
            	cls : 'x-background-underlay'
            });
            
            this.el.applyStyles({
            	'z-index' : zindex
            });
            
            var size = target.getSize();
            
            this.markupClass = eval(this.markupClass);
            
            this.markupConfig = this.markupConfig || {};
            Ext.apply(this.markupConfig,{
            	applyTo : this.el
            });
            this.markupComp = new (this.markupClass)(this.markupConfig);
            
            this.adjustedLeft = this.adjustedLeft || this.markupComp.adjustedLeft || 0;
            this.adjustedTop = this.adjustedTop || this.markupComp.adjustedTop || 0;
            this.adjustedWidth = this.adjustedWidth || this.markupComp.adjustedWidth || 0;
            this.adjustedHeight = this.adjustedHeight || this.markupComp.adjustedHeight || 0;
            
            this.markupComp.setSize(size.width + this.adjustedWidth, size.height + this.adjustedHeight);
            
            this.el.setLeftTop(this.adjustedLeft, this.adjustedTop);
            this.markupComp.doLayout();
            
            this.markupComp.fireEvent('adjustParent', this.parent);
        },
        
        
        onAfterLayout : function (cont, layout) {
			if (!this.el) return;
			
			var size = this.getTargetEl().getSize();
			var currentSize = this.markupComp.getSize();
			
			if (size.width + this.adjustedWidth != currentSize.width || size.height + this.adjustedHeight != currentSize.height) {
	            this.markupComp.setSize(size.width + this.adjustedWidth, size.height + this.adjustedHeight);
	            
	            this.el.setLeftTop(this.adjustedLeft, this.adjustedTop);
	            this.markupComp.doLayout();
			}
        },
        
        onHide : function () {
        	if (!this.el) return;
        	
        	this.el.hide();
        },
        
        onShow : function () {
        	if (!this.el) return;
        	
        	this.el.show();
        	
        	this.onAfterLayout();
        },

        onClose : function () {
        	if (!this.el) return;
        	
        	this.markupComp.remove();
        	this.el.remove();
        	this.parent = undefined;
        }
        
    }); //eof extend
        
}); //eof declare
