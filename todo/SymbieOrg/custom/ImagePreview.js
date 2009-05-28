declare( 'SymbieOrg::custom::ImagePreview', function (use,checkState,__PACKAGE__) {
	
	SymbieOrg.custom.ImagePreview = Ext.extend(Ext.Container, {

		autoEl : 'div',
		layout : 'auto',
		
		previewSrc : undefined,
		
		fullsizeSrc : undefined,
		
		mirrorEffectCorrection : undefined,
		
		constructor : function(config) {
	        SymbieOrg.custom.ImagePreview.superclass.constructor.apply(this, arguments);
	        
	        this.preview = Ext.get(document.createElement('img'));
	        this.preview.dom.src = this.previewSrc;
	        this.preview.addClass('x-image-preview-source');
	    },
	
	    
	    onRender : function (ct, position) {
	    	SymbieOrg.custom.ImagePreview.superclass.onRender.apply(this, arguments);
	    	
	    	this.el.appendChild(this.preview);

	        this.preview.on('click', this.showFullsize, this);
	    },
	    

	    showFullsize: function(e) {
	        if (this.zooming) return;
	        
	        if (!this.fullsize) {
	        	this.fullsizeWrp = Ext.getBody().createChild({
	            	tag : 'div',
	            	cls : 'x-image-preview-fullsize-wrp'
	            });
	            
	            this.imageBox = this.preview.getBox();
	            if (this.mirrorEffectCorrection) {
	            	this.imageBox.height += this.mirrorEffectCorrection;
	            }
	            
	            this.fullsizeWrp.setBox(this.imageBox);
	            
	            this.fullsize = Ext.get(document.createElement('img'));
	            this.fullsize.addClass('x-image-preview-fullsize');
		        this.fullsize.on('load', function () {
		        	this.fullsizeWrp.appendChild(this.fullsize);
		        	
		        	this.fullsizeSize = this.fullsize.getSize();
		        	this.fullsize.setSize(this.imageBox.width, this.imageBox.height);
		        	
		        	this.showFullsize();
		        	
		        }, this);
		        
		        this.fullsize.dom.src = this.fullsizeSrc;
		        
		        return;
	        }
	        this.zooming = true;
	        
			var aspectRatio = this.imageBox.width / this.imageBox.height;
        	
        	var screenWidth = Ext.lib.Dom.getViewWidth();
			var screenHeight = Ext.lib.Dom.getViewHeight();
			var canvasWidth = screenWidth * 0.9;
			var canvasHeight = screenHeight * 0.9;
			
			var fullWidth = canvasWidth;
			var fullHeight = canvasWidth / aspectRatio;
			
			if (fullHeight > canvasHeight) {
				fullHeight = canvasHeight;
				fullWidth = fullHeight * aspectRatio;
			}
			
			if (fullHeight > this.fullsizeSize.height) {
				fullHeight = this.fullsizeSize.height;
				fullWidth = this.fullsizeSize.width;
			}
			
			var full_x = Math.round( (screenWidth - fullWidth) / 2 );
			var full_y = Math.round( (screenHeight - fullHeight) / 2 );
			
//			var translated = this.fullsizeWrp.translatePoints(full_x, full_y)
	            
	        Ext.getBody().mask();
	        
	        this.fullsize.setOpacity(0);
	        this.fullsize.shift({
	        	opacity : 1,
	        	width : fullWidth,
	        	height : fullHeight,
	        	x : full_x,
	        	y : full_y + Ext.get('html_wrapper').dom.scrollTop,
	        	easing: 'easeOut',
			    duration: .8,
			    callback : this.setupFullsize,
			    scope : this
	        });
	        
	    },
	    
	    
	    setupFullsize : function () {
	    	
	    	this.fullsize.on('click', this.zoomBack, this);
	    },
	    
	    
	    zoomBack : function (e) {
	        this.fullsize.shift({
	        	opacity : 0,
	        	width : this.imageBox.width,
	        	height : this.imageBox.height,
	        	x : this.imageBox.x,
	        	y : this.imageBox.y,
	        	easing: 'easeIn',
			    duration: .8,
			    callback : function () {
			    	this.fullsize.remove();
			    	this.fullsizeWrp.remove();
			    	this.fullsize = undefined;
			    	this.fullsizeWrp = undefined;
			    	
			    	this.zooming = false;
			    	Ext.getBody().unmask();
			    },
			    scope : this
	        });
	    }
	
	});
	
	Ext.reg('imagepreview', SymbieOrg.custom.ImagePreview);

}); //eof declare