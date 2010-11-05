declare( 'SymbieOrg::Background::RoundedBordered', function (use,checkState,__PACKAGE__) {
    
    use(['Ext::ux::layout::ColumnFit'], function(){

    	SymbieOrg.Background.RoundedBordered = Ext.extend(Ext.Container, {
    		
	        constructor: function(config) {        
	            
	            Ext.apply(config, {
	            	cls : 'x-rounded-bordered-back',
	            	
	            	layout : 'columnfit',
	            	height : 30,
	            	
	            	items : [
	            		//left
	        			{
		            		xtype : 'container',
		            		autoEl: 'div',
		            		
		            		width : 15,
		            		cls : 'left'
	            		},
	            		//eof left
	            		
	            		//center
	            		{
	            			xtype : 'container',
	            			autoEl: 'div',
	        				
	        				columnWidth : 1,
	        				cls : 'center'
	            		},
	            		//eof center
	            		
	            		//right
	            		{
			            	xtype : 'container',
			            	autoEl: 'div',

		            		width : 15,
		            		cls : 'right'
	            		}
	            		//eof right
	            	]
	                
	            }); //eof apply
	            
				SymbieOrg.Background.RoundedBordered.superclass.constructor.call(this, config);
	        }, //eof constructor
	        
	        
	        initComponent: function() {
				SymbieOrg.Background.RoundedBordered.superclass.initComponent.call(this);
	        }
	        
	    }); //eof extend
    
    }); //eof use
    
}); //eof declare


