declare( 'Symbie::DataSource::Base', function (use,checkState,__PACKAGE__) {
	
	use ('Ext::ux::data::Store::PagedJSON', function (){

		Symbie.DataSource.Base = Ext.extend(Ext.util.Observable, {
			
			name : undefined, //Symbie::DataSource::Album
			ID : undefined, // [ 'album_id' ]
			params : undefined, // [ 'withSmth' ]
			
			storeClass : 'Ext.data.JsonStore',
			pagerClass : undefined,
			
			perPage : undefined,
			pagerConfig : undefined,
			
			serverSideCall : undefined,
			serverSideRoot : undefined,
			url : undefined,
			authorizationRequired : false,
			
			fields : undefined, //TODO fields??
			
	
			findByHandler : function (handler) {
				var storeId = this.constructDataSourceId(this.name, handler.ID);
				
				return Ext.StoreMgr.get(storeId);
			},
			
			
			create : function (handler) {
				var already = this.findByHandler(handler);
				if (already) return already;
				
				var storeID = {};
				var storeId = this.constructDataSourceId(this.name, handler.ID, storeID);
				
				var storeConfig = {
					storeId : storeId,
					
					url : this.url,
					baseParams : storeID
				};
				
				Ext.apply(storeConfig, handler.storeConfig);
				
				if (handler.pagerClass || this.pagerClass) {
					var pagerClass = eval(handler.pagerClass || this.pagerClass);
					
					handler.pagerConfig = handler.pagerConfig || this.pagerConfig || {};
					handler.pagerConfig.perPage = handler.perPage || handler.pagerConfig.perPage || this.perPage;
					
					storeConfig.pager = new pagerClass(handler.pagerConfig);
				}
				
				return new (eval (this.storeClass) )(storeConfig);
			},
			
			
			constructDataSourceId : function (name, idValues, populate) {
				var id = name;
				
				var ID = this.ID || [];
				idValues = idValues || {};
				ID.sort();
				for (var i = 0; i < ID.length; i++) {
					var key = ID[i];					
					if (typeof idValues[key] == 'undefined') throw "Required parameter " + key + " is missed during creation of " + name;
					id += ':' + idValues[key];
					
					if (populate) populate[key] = idValues[key];
				}
				
				return id;
			}
			
		}); //eof extend

	}); //eof use
	
}); //eof declare

