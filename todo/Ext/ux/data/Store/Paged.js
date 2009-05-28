declare( 'Ext::ux::data::Store::Paged', function (use, checkState, __PACKAGE__){

    use(['Symbie::Plugin::Pager::Simple'],function(){
        
		Ext.ux.data.Store.Paged = Ext.extend(Ext.data.Store, {
			
			/*
			 * configuration object for Pager::Simple constructor or Pager instance 
			 */			
			pager : undefined,

			
            constructor: function(config) {        
				if (config.pager.constructor == Object) {
					config.pager = new Symbie.Plugin.Pager.Simple(config.pager);
				}
				
				config.pager.init(this);
				
				this.on('refresh', this.refresh, this);
				
				Ext.ux.data.Store.Paged.superclass.constructor.call(this, config);
            }, //eof constructor
            
			
		    load : function(options){
		        options = options || {};
		        if(this.fireEvent("beforeload", this, options) !== false){
		            var initial = !this.lastOptions;
					
					this.storeOptions(options);
		            var p = Ext.apply(options.params || {}, this.baseParams);
		            if(this.sortInfo && this.remoteSort){
		                var pn = this.paramNames;
		                p[pn["sort"]] = this.sortInfo.field;
		                p[pn["dir"]] = this.sortInfo.direction;
		            }
		            
					if (initial) {
						p.meta = true;
						p.startAt = this.pager.firstForMetaLoad();
						p.endAt = this.pager.lastForMetaLoad();
					}
					
					this.proxy.load(p, this.reader, this.loadRecords, this, options);
		            return true;
		        } else {
		          return false;
		        }
		    },
			
			
			fetch : function (startAt, endAt) {

				this.load({
					add : true,
					params : {
						startAt : startAt,
						endAt : endAt
					}
				});
				
//				var for_fetch = [];
//				for (var i = startAt; i <= endAt; i++) {
//					if (!this.getById(i)) for_fetch.push(i);
//				}
//				
//				if (for_fetch.length) {
//					startAt = [];
//					endAt = [];
//					
//					var rangeStartedAt = for_fetch[0];
//					var prevRangeValue = for_fetch[0] - 1;
//					
//					for (i = 0; i < for_fetch.length; i++) {
//						if (for_fetch[i] != (prevRangeValue + 1) ) {
//							startAt.push(rangeStartedAt);
//							endAt.push(prevRangeValue);
//							
//							rangeStartedAt = for_fetch[i];							
//						}
//						
//						prevRangeValue = for_fetch[i];						
//					}
//					
//					startAt.push(rangeStartedAt);
//					endAt.push(prevRangeValue);
//					
//					this.load({
//						add : true,
//						params : {
//							startAt : startAt,
//							endAt : endAt
//						}
//					});
//				} else {
//					this.applyPageFilter();//не нужно
//				}
		    },
			
			
			applyPageFilter : function () {
				this.filterBy(function(record, id){
					return this.pager.firstOnPage() <= id && id <= this.pager.lastOnPage(); 
				});
			},
			

			reset : function (){
				this.removeAll(true);
				this.lastOptions = undefined;
			},
			

			refresh : function (){
				this.reset();
				this.load();
			},
			
		    
			/**
		     * Add Records to the Store and fires the add event.
		     * @param {Ext.data.Record[]} records An Array of Ext.data.Record objects to add to the cache.
		     */
		    add : function(records){
		        records = [].concat(records);
		        if(records.length < 1){
		            return;
		        }
		        for(var i = 0, len = records.length; i < len; i++){
		            records[i].join(this);
		        }
		        var index = this.data.length;
		        this.data.addAll(records);
		        if(this.snapshot){
		            this.snapshot.addAll(records);
		        }
		        this.totalLength = Math.max(this.totalLength || 0, this.data.length); //FIX
		        
				this.pager.setTotal(this.totalLength);				
				this.applyPageFilter();
				
				this.fireEvent("add", this, records, index);
		    },

			
		    // private
		    // Called as a callback by the Reader during a load operation.
		    loadRecords : function(o, options, success){
		        if(!o || success === false){
		            if(success !== false){
		                this.fireEvent("load", this, [], options);
		            }
		            if(options.callback){
		                options.callback.call(options.scope || this, [], options, false);
		            }
		            return;
		        }
		        var r = o.records, t = o.totalRecords || r.length;
		        if(!options || options.add !== true){
		            if(this.pruneModifiedRecords){
		                this.modified = [];
		            }
		            for(var i = 0, len = r.length; i < len; i++){
		                r[i].join(this);
		            }
		            if(this.snapshot){
		                this.data = this.snapshot;
		                delete this.snapshot;
		            }
		            this.data.clear();
		            this.data.addAll(r);
		            this.totalLength = t;
					
					this.pager.setTotal(this.totalLength);
		            
					this.applySort();
					
					this.applyPageFilter();
		            this.fireEvent("datachanged", this);
		        }else{
					this.clearFilter(true);														//FIX
					this.totalLength = Math.max(this.totalLength || 0, t, this.data.length); 	//FIX
					this.add(r);
					
					this.fireEvent("datachanged", this);										//FIX
		        }
		        this.fireEvent("load", this, r, options);
		        if(options.callback){
		            options.callback.call(options.scope || this, r, options, true);
		        }
		    },
			
			removeAll : function(suppressEvent){
		        this.data.clear();
		        if(this.snapshot){
		            this.snapshot.clear();
		        }
		        if(this.pruneModifiedRecords){
		            this.modified = [];
		        }
		        if (!suppressEvent) this.fireEvent("clear", this);
		    }
			
        }); //eof extend
		
    }); //eof use

}); //eof declare