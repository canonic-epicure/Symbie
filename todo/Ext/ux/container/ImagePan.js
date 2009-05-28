declare( 'Ext::ux::container::ImagePan', function (use,checkState,__PACKAGE__) {
	
	Ext.ux.container.ImagePan = Ext.extend(Ext.Container, {

		autoEl : 'div',
		
		client : undefined,
		
		dragClick : undefined,
		
		constructor: function(config) {
	        Ext.ux.container.ImagePan.superclass.constructor.apply(this, arguments);
	        
	        this.client = this.client || Ext.get(document.createElement('img'));
	    },
	
	    onRender: function() {
	    	Ext.ux.container.ImagePan.superclass.onRender.apply(this, arguments);
	    	
	    	if(!this.innerCt){
	            this.el.addClass('x-imagepan-ct');
	            this.innerCt = this.el.createChild({cls:'x-imagepan-inner'});	            
	            this.innerCt.setStyle( { 'height' : '100%', width : '100%', 'overflow' : 'hidden', position: 'relative' } );
	        }
	        this.innerCt.appendChild(this.client);

	        this.dragClick = false;	        
	        this.client.on('mousedown', this.onMouseDown, this);
	        
	        this.client.setStyle('cursor', 'move');
	    },
	    

	    doLayout : function (){
	    	Ext.ux.container.ImagePan.superclass.doLayout.call(this);
	    },
	
	    onMouseDown: function(e) {
	        e.stopEvent();
	        this.mouseX = e.getPageX();
	        this.mouseY = e.getPageY();
	        Ext.getBody().on('mousemove', this.onMouseMove, this);
	        Ext.getDoc().on('mouseup', this.onMouseUp, this);
	    },
	
	    onMouseMove: function(e) {
	    	this.dragClick = true;
	    	
	        e.stopEvent();
	        var x = e.getPageX();
	        var y = e.getPageY();
	        if (e.within(this.innerCt)) {
		        var xDelta = x - this.mouseX;
		        var yDelta = y - this.mouseY;
		        this.innerCt.dom.scrollLeft -= xDelta;
		        this.innerCt.dom.scrollTop -= yDelta;
		    }
	        this.mouseX = x;
	        this.mouseY = y;
	    },
	
	    onMouseUp: function(e) {
	        Ext.getBody().un('mousemove', this.onMouseMove, this);
	        Ext.getDoc().un('mouseup', this.onMouseUp, this);
	        
	    	if (!this.dragClick) {
	    		if (this.ownerCt) {
	        		this.ownerCt.addEvents('imagepanclick');
	        		this.ownerCt.fireEvent('imagepanclick');	    		
	        	}
	    	}
	    	this.dragClick = false;
	    }
	
	});
	
	Ext.reg('imagepan', Ext.ux.container.ImagePan);

}); //eof declare