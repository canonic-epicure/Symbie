declare( 'Symbie::Plugin::Pager::Fluid', function (use) {

    use('Symbie::Plugin::Pager::Simple', function (){
    	
	    Symbie.Plugin.Pager.Fluid = Ext.extend(Symbie.Plugin.Pager.Simple, {
	        
	    	//configuration options + properties
	        
	        firstOnPage_ : undefined,
	//        lastOnPage_ : undefined,
	        
	        minPerPage : 10,
	        perPage : 25,
	        pageSetRadius : 2, //радиус набора страниц, заданный в страницах
	        
	        totalPages : 0,
	        totalElements : 0, 
	        
	        currPage : undefined,
	        
	    	//eof configuration options
	        
	        
	    	//private properties    
	        parent : undefined,
	        
	    	//eof private properties    
	        
	        
	    	//methods    
	        constructor: function(config) {
	            Symbie.Plugin.Pager.Fluid.superclass.constructor.call(this, config);    
	        },
	        
	        
	        init : function(parent) {
	        	Symbie.Plugin.Pager.Fluid.superclass.init.call(this, parent);
	        	
	            //incoming events, handled by plugin, fired on parent	            
	            parent.addEvents('capacity');
	            
	            parent.on('capacity', this.onCapacity, this, { buffer : 500 });
	        },
	        
	        
	        setFirst : function(value) {
        		if (value === null) {
					this.firstOnPage_ = undefined;
					
					this.currPage = undefined;
					this.totalPages = 0;
					
					return;
        		} else {
        			this.firstOnPage_ = value >= 0 ? value : 0;
        		}
        		
        		this.totalPages = Math.ceil( (this.totalElements - this.firstOnPage_ ) / this.perPage) + Math.ceil( this.firstOnPage_ / this.perPage );
					
				this.currPage = Math.ceil( this.firstOnPage_ / this.perPage ); 
	        },
	        
	        
	        onCapacity : function (newValue, oldValue) {
	        	if (newValue >= this.minPerPage) this.setPerPage(newValue);
	        },
	        
	        
	        setTotal : function (value) {
	            if (this.totalElements != value) {
					this.totalElements = value;
		            
					if (!this.totalElements) {
						this.setFirst(null);
					} else if (typeof this.firstOnPage_ == 'undefined') {
						this.setFirst(0);
					} else {
						
						if (this.firstOnPage_ > this.totalElements - 1) {
							this.firstOnPage_ = this.totalElements - 1 - this.perPage + 1;
						}
						
						this.setFirst(this.firstOnPage_);
					}
					
					this.firePageState();
				}
	        },
	        
	        
	        setPerPage : function (value) {
	        	if (this.perPage != value) {
		            this.perPage = value;
		            
					this.setFirst();
		            
		            this.parent.fetch(this.firstOnPage(), this.lastOnPage());
					
		            this.firePageState();
	        	}
	        },
	        
	        
	        nextPage : function () {
	            if (this.lastOnPage() == this.totalElements - 1) return false;
	            
	            this.currPage++;
	            
	            this.setFirst(this.lastOnPage_ + 1);
	            
	            this.parent.fetch(this.firstOnPage(), this.lastOnPage());
	            this.firePageState();
	        },
	        
	        
	        setPage : function (pageIndex) {
	            if ( pageIndex >= 0 && pageIndex < this.totalPages && pageIndex != this.currPage ) {
	
	            	this.setFirst( this.firstOnPage() + (pageIndex - this.currPage) * this.perPage );
	                
	                this.parent.fetch(this.firstOnPage(), this.lastOnPage());
	                this.firePageState();
	            }
	        },
	        
	        
	        prevPage : function () {
	            if (!this.firstOnPage_) return false;
	            
	            this.currPage--;
	            
	            this.setFirst(this.firstOnPage_ - this.perPage);
	            
	            this.parent.fetch(this.firstOnPage(), this.lastOnPage());
	            this.firePageState();
	        },
	        
	
	        firstOnPage : function () {
	        	return this.firstOnPage_;
	        }
	    	//eof methods
	    
	    }); //eof extend    	
    
    }); //eof use
    
}); //eof declare