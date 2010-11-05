declare( 'Symbie::Plugin::Pager::Simple', function (use) {

    Symbie.Plugin.Pager.Simple = Ext.extend(Ext.util.Observable, {
        
    	//configuration options + properties
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
            Ext.apply(this, config);    
        },
        
        init : function(parent) {
            this.parent = parent;
            
            //incoming events, handled by plugin, fired on parent
            parent.addEvents('nextpage','prevpage','page');
            
            parent.on('nextpage',this.nextPage,this);
            parent.on('prevpage',this.prevPage,this);
			parent.on('page',this.setPage,this);
			
			
			//outcoming events, handled by parent
			parent.addEvents('pagestate');
        }, 
        
        setTotal : function (value) {
            if (this.totalElements != value) {
				this.totalElements = value;
	            this.totalPages = Math.ceil(this.totalElements / this.perPage);
				
				if (typeof this.currPage == 'undefined' && this.totalElements) this.currPage = 0;
				if (!this.totalElements) this.currPage = undefined;
					
				this.firePageState();
			}
        },
        
        setPerPage : function (value) {
            if (this.perPage != value) {
	            this.perPage = value;
	            this.totalPages = Math.ceil(this.totalElements / this.perPage);
	            
	            this.firePageState();
            }
        },
        
        nextPage : function () {
            if (this.currPage == (this.totalPages-1)) return false;
            
            this.currPage++;
            this.parent.fetch(this.firstOnPage(), this.lastOnPage());
            this.firePageState();
        },
        
        setPage : function (pageIndex) {
            if ( (pageIndex >=0) && (pageIndex < this.totalPages) ) {
                this.currPage = pageIndex;
                this.parent.fetch(this.firstOnPage(), this.lastOnPage());
                this.firePageState();
            }
        },
        
        prevPage : function () {
            if (!this.currPage) return false;
            
            this.currPage--;
            
            this.parent.fetch(this.firstOnPage(), this.lastOnPage());
            this.firePageState();
        },
        

        firstOnPage : function () {
            if (!this.totalElements) return undefined;
			
            return this.currPage * this.perPage;
        },
		
        
        lastOnPage : function () {
        	if (!this.totalElements) return undefined;
        	
        	return Math.min(this.firstOnPage() + this.perPage - 1, this.totalElements - 1);
        },
        
		
        firstForMetaLoad : function () {
            return this.firstOnPage() || 0;
        },
		
		
		lastForMetaLoad : function () {
			return this.firstForMetaLoad() + this.perPage - 1;
        },
		
		
        firePageState : function () {
            var canPrev = this.currPage ? true : false, canNext = (this.currPage == undefined || this.currPage == this.totalPages-1) ? false : true;
            
            var pageSetRadius = this.pageSetRadius * this.perPage;        
            var pageSetStart = this.firstOnPage() - pageSetRadius;
            var pageSetEnd = this.lastOnPage() + pageSetRadius;
            
            if (pageSetStart <= 0) {
                pageSetEnd += Math.abs(pageSetStart);
                pageSetStart = 0;
            }
            
            if (pageSetEnd >= (this.totalElements-1)) {
                
                pageSetStart -= pageSetEnd - (this.totalElements-1);
                
                pageSetEnd = this.totalElements - 1;
            }
            
            if (pageSetStart <= 0) {
                pageSetStart = 0;
            }
            
            var pageState = {
                first : this.firstOnPage(),
                last : this.lastOnPage(),
                totalElements : this.totalElements,
                totalPages : this.totalPages,
                pageSet : [],
                currPage : this.currPage,
                canPrev : canPrev,
                canNext : canNext
            };
            
            for (var i = pageSetStart; i <= pageSetEnd; i += this.perPage) {
                pageState.pageSet.push( i / this.perPage );
            }
            
            var msg = I18n.PagerInfo.no_data;
            
            if (pageState.totalElements > 0) {
                msg = (pageState.first+1) + I18n.PagerInfo.till + (pageState.last+1) + I18n.PagerInfo.from + pageState.totalElements;
                
                msg += I18n.PagerInfo.pages;
                
                if (pageState.canPrev) msg += ' <- ';
                
                for (var i = 0; i < pageState.pageSet.length; i++) {
                    msg += ((pageState.pageSet[i] == pageState.currPage) ? '<b>' : '') + (pageState.pageSet[i]+1) + ', ' + ((pageState.pageSet[i] == pageState.currPage) ? '</b>' : '');
                }
                
                if (pageState.canNext) msg += ' -> ';
            }
            
            pageState.standartMsg = msg;
            
            this.parent.fireEvent('pagestate',pageState);
        }
    	//eof methods
    
    
    }); //eof extend
     
}); //eof declare