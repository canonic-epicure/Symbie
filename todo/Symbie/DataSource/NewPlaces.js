declare( 'Symbie::DataSource::NewPlaces', function (use,checkState,__PACKAGE__) {
	
	use('Symbie::DataSource::Base', function () {
	
		Symbie.DataSource.NewPlaces = Ext.extend(Symbie.DataSource.Base, {
			
			name : __PACKAGE__,
			ID : [],
			params : undefined, 
			
			serverSideCall : [ 'SymbieOrg::Controller::DataSource::Place', 'new_places'],
			serverSideRoot : 'js_new_places',
			
			storeClass : 'Ext.ux.data.Store.PagedJSON',
			pagerClass : 'Symbie.Plugin.Pager.Simple',
			
			perPage : 5,

			url : '/datasource/place/new_places',
			authorizationRequired : false
			
		}); //eof extend
		
		Symbie.DataSource.NewPlaces = new Symbie.DataSource.NewPlaces();
		
	}); //eof use
	
}); //eof declare