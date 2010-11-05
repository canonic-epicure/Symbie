declare( 'Ext::ux::widgets::JITEditor', function (use, checkState, __PACKAGE__){
	
	Ext.ux.widgets.JITEditor = Ext.extend(Ext.Editor, {
	    alignment: "tl-tl",
	    autoSize : true,
	    updateEl : true,
	    
	    shadow : false,
	    
//	    hideEl : false,
//	    cls: "x-small-editor",
	    shim: false,
	    completeOnEnter: true,
	    cancelOnEsc: true,
	    ignoreNoChange : true,
	    
	    labelSelector: '.x-editable',
	    
	    constructor : function(cfg, field){
		    Ext.ux.widgets.JITEditor.superclass.constructor.call(
		    	this,
		        field || new Ext.form.TextField({
		            cls : 'jiteditor',
		            allowBlank: false,
		            selectOnFocus:true
		        }), 
		        cfg
		    );
		},
	
	    init : function(parent){
	        this.parent = parent;
	        parent.on('render', this.initEditor, this);
	        
	        parent.addEvents( 'editComplete' );
	        
	        this.on('complete', this.onComplete, this);
	    },
	
	    initEditor : function(){
	        this.parent.getEl().on('mousedown', this.onMouseDown, this, {delegate: this.labelSelector});
	    },
	
	    onMouseDown : function(e, target){
	        if(!e.ctrlKey && !e.shiftKey){
	            e.stopEvent();
	            this.startEdit(target);
	            this.tokenName = target.getAttributeNS('','name');
	        }else{
	            e.preventDefault();
	        }
	    },
	
	    onComplete : function(editor, value){
	    	this.parent.fireEvent('editComplete', editor, this.tokenName, value);
	    }
	});

}); //eof declare