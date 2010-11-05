declare( 'SymbieOrg::Background::RoundedFilled', function (use,checkState,__PACKAGE__) {
    
    use(['Ext::ux::layout::ColumnFit'], function(){

    	SymbieOrg.Background.RoundedFilled = Ext.extend(Ext.Container, {
    		
	        constructor: function(config) {        
	            
	            Ext.apply(config, {
	            	cls : 'x-rounded-filled-back',
	            	
	            	layout : 'columnfit',
	            	height : 30,
	            	
	            	items : [
	            		//left
	        			{
		            		xtype : 'container',
		            		autoEl: 'div',
		            		
		            		width : 20,
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

		            		width : 20,
		            		cls : 'right'
	            		}
	            		//eof right
	            	]
	                
	            }); //eof apply
	            
				SymbieOrg.Background.RoundedFilled.superclass.constructor.call(this, config);
	        }, //eof constructor
	        
	        
	        initComponent: function() {
				SymbieOrg.Background.RoundedFilled.superclass.initComponent.call(this);
	        }
	        
	    }); //eof extend
    
    }); //eof use
    
}); //eof declare


