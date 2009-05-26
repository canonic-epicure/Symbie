declare( 'Symbie::DataManager', function (use,checkState,__PACKAGE__) {
	
	
	Symbie.DataHandler = Ext.extend(Ext.util.Observable, {
		
		isComposite : false,
		ready : false,
		DATA : undefined,
		RESULT : undefined,
		
		handler : undefined,
		
		authorizationRequired : undefined,
		
		constructor : function (config) {
			this.handler = config;
			
			if (this.handler instanceof Array) {
				this.isComposite = true;
				
				for (var i = 0; i < this.handler.length; i++) {
					this.handler[i] = new Symbie.DataHandler(this.handler[i]);
				}
			} else {
				if (this.handler.then) {
					this.handler.then = new Symbie.DataHandler(this.handler.then);
				}
			}
			
		},
		
		
		resolveWidgetReferences : function (widgetParams) {
			this.walkThrough('_resolveWidgetReferences', [widgetParams]);
		},
		
		
		_resolveWidgetReferences : function (widgetParams) {
			var self = this.handler;
			
			for (var key in self.ID) {
				var value = self.ID[key];
				
				if (typeof value == 'string' && /^\$widget\.(.+)/.test(value)) {
					var properties = ( /^\$widget\.(.+)/.exec(value) )[1];
					
					properties = properties.split(/\./);
//					if (properties.shift()) throw "Wrong $widget substitution";
					
					var newValue = widgetParams;
					for (var i = 0; i < properties.length; i++) {
						newValue = newValue[properties[i]];
					}
					
					self.ID[key] = newValue;
				}
			}
		},
		
		
		walkThrough : function (action, paramsArray, top, prev) {
			if (this.isComposite) {
				for (var i = 0; i < this.handler.length; i++) {
					this.handler[i].walkThrough(action, paramsArray, top, prev);
				}
				return;
			}
			
			
			this.top = top;
			this.prev = prev;
			this[action].apply(this, paramsArray);
			
			if (this.handler.then) {
				this.handler.then.walkThrough(action, paramsArray, top, this);
			}
		},

		
		checkDataSource : function (notAvailableAction) {
			this.walkThrough('_checkDataSource', [notAvailableAction]);
		},
		
		
		_checkDataSource : function (notAvailableAction) {
			var self = this.handler;
			
			if ( !jScout.packageMgr.getPackage(self.name).isLoaded() ) {
				if (notAvailableAction == 'throw') 
					throw 'DataSource ' + self.name + ' is not available'
				else if (notAvailableAction == 'load')
					useSync(self.name)
				else throw "Wrong dataSourceNotAvailableAction value";
			}
			
			var dataSourceClass = eval(self.name.replace(/::/g,'.'));
			self.url = dataSourceClass.url;
			self.serverSideRoot = dataSourceClass.serverSideRoot;
			self.serverSideCall = dataSourceClass.serverSideCall;
			self.authorizationRequired = dataSourceClass.authorizationRequired;
			
			if (!self.perPage) self.perPage = dataSourceClass.perPage;
			if (!self.pagerConfig) self.pagerConfig = dataSourceClass.pagerConfig;
		},
		
		
		checkDataReady : function () {
			this.walkThrough('_checkDataReady', [], this);
		},

		
		_checkDataReady : function () {
			this.walkThrough('_resolveReferences', [], this.top, this.prev);
			
			var self = this.handler;
			
			if (this.isIDReady()) {
				var dataSourceClass = eval(self.name.replace(/::/g,'.'));
				
				var store;
				if (store = dataSourceClass.findByHandler(self)) {
					
					this.STORE = store;
					this.ready = true;
					if (store.getCount() == 1) this.DATA = store.getAt(0).data;
				}
				
			}
		},
		
		isReady : function () {
			if (this.isComposite) {
				for (var i = 0; i < this.handler.length; i++) {
					if (!this.handler[i].isReady()) return false;
				}
				return true;
			}
			
			if ( !this.ready && (!this.handler.ifAuthorized || Symbie.Authentication.user_exists()) ) return false;
			
			if (this.handler.then) {
				return this.handler.then.isReady();
			}
			
			return true;
		},
		
		
		_resolveReferences : function () {
			var self = this.handler;
			
			for (var key in self.ID) {
				var value = self.ID[key];
				
				if (typeof value == 'string') {
					if ( /^\$top\..+/.test(value) ) {
						if (!this.top) throw 'Cant find $top handler for key=' + key + ', value=' + value;
						
						if (!this.top.ready) continue;
						if (!this.top.DATA) throw "Reference to multiple or no rows";
						
						var properties = ( /^\$top\.(.+)/.exec(value) )[1];
							
						properties = properties.split(/\./);
//						if (properties.shift()) throw "Wrong $top substitution";
							
						var newValue = this.top.DATA;
						for (var i = 0; i < properties.length; i++) {
							newValue = newValue[properties[i]];
						}
						
						self.ID[key] = newValue;
					}
					else if (/^\$prev\..+/.test(value)) {
						if (!this.prev) throw 'Cant find $prev handler for key=' + key + ', value=' + value;
						
						if (!this.prev.ready) continue;
						if (!this.prev.DATA) throw "Reference to multiple or no rows";
						
						var properties = ( /^\$prev\.(.+)/.exec(value) )[1];
							
						properties = properties.split(/\./);
//						if (properties.shift()) throw "Wrong $prev substitution";
							
						var newValue = this.top.DATA;
						for (var i = 0; i < properties.length; i++) {
							newValue = newValue[properties[i]];
						}
						
						self.ID[key] = newValue;
					}
				}
			}
		},

		
		isIDReady : function () {
			var ID = this.handler.ID;
			
			for (var key in ID) {
				var value = ID[key];
				
				if (typeof value == 'string' && ( /^\$widget\..+/.test(value) || /^\$top\..+/.test(value) || /^\$prev\..+/.test(value)) ) return false;
			}
			
			return true;
		},
		
		
		getData : function (){
			var result;
			
			if (this.isComposite) {
				result = [];
				
				for (var i = 0; i < this.handler.length; i++) {
					result.push( this.handler[i].getData() );
				}
				return result;
			}
			
			var self = this.handler;
			
			result = {
				name : self.name,
				ID : self.ID,
				ready : this.ready,
				url : self.url,
				serverSideRoot : self.serverSideRoot,
				serverSideCall : self.serverSideCall,
				ifAuthorized : self.ifAuthorized
			};
			
			if (this.handler.perPage || this.handler.pagerConfig) {
				var perPage = this.handler.perPage || this.handler.pagerConfig.perPage;
				
				result.perPage = perPage;
				
				result.startAt = 0;
				result.endAt = perPage - 1;
			}
			
			if (this.DATA) {
				result.DATA = this.DATA;
			}
			
			if (this.handler.then) {
				result.then = this.handler.then.getData();
			}
			
			return result;
		},
		
		
		processResult : function (){
			this.walkThrough('_processResult', [], this);
		},
		
		
		_processResult : function (){
			var self = this.handler;
			
			if (this.handler.ready) {
				var store = Symbie.DataManager.create(self);
				
				store.loadData(self.RESULT);
			}
		}
		
	});
	
	
	
	
	
	Symbie.DataManager = Ext.extend(Ext.util.Observable, {
		
		url : undefined,
		dataSourceNotAvailableAction : 'throw', //load
		
		
		findByHandler : function (handler) {
			var dataSourceClass = eval(handler.name.replace(/::/g,'.'));
			
			return dataSourceClass.findByHandler(handler);
		},
		

		create : function (handler) {
			var dataSourceClass = eval(handler.name.replace(/::/g,'.'));
			
			return dataSourceClass.create(handler);
		},
		
		
		isReady : function (handler, options) {
			var dataHandler = this.prepareHandler(handler, options);
			
			if (dataHandler.isReady()) return dataHandler;
			
			return undefined;
		},
		
		
		prefetch : function (handler, options) {
			var dataHandler = this.prepareHandler(handler, options);
			
			Ext.Ajax.request({
				url : this.url,
				method : 'POST',
				
				params : {
					handler : Ext.util.JSON.encode( dataHandler.getData() )
				},
				
				callback : this.postfetch,
				scope : this,
				
				sync : options.sync,
				
				myOptions : options
			});
		},
		
		
		postfetch : function (options, success, response) {
            var res;
            try {
            	if (!success) throw 'Error';
            	res = eval('('+response.responseText+')');
            } catch (e) {
            	Ext.Msg.alert('Ошибка', 'Ошибка загрузки данных');
            	return;
            }
			
            var dataHandler = this.processResult(res.js_data_packet);
            

            var myOptions = options.myOptions;            
            if (myOptions.callback) myOptions.callback.call(myOptions.scope || window, dataHandler);
		},
		
		
		processResult : function (resultHandler) {
			var dataHandler = new Symbie.DataHandler(resultHandler);
			
			dataHandler.processResult();
			dataHandler.checkDataReady();
			
			return dataHandler;
		},
		
		
		prepareHandler : function (handler, options) {
			options = options || {};
			var dataHandler = Ext.util.JSON.decode(Ext.util.JSON.encode(handler));
			
			dataHandler = new Symbie.DataHandler(dataHandler);
			
			dataHandler.resolveWidgetReferences(options.widgetParams);
			dataHandler.checkDataSource(this.dataSourceNotAvailableAction);
			dataHandler.checkDataReady();
			
			return dataHandler;
		}
		
	}); //eof extend
	
	Symbie.DataManager = new Symbie.DataManager();
	
}); //eof declare

