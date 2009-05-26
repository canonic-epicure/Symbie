declare( 'Symbie::DataSource::PlacesInCountry', function (use,checkState,__PACKAGE__) {
	
	use('Symbie::DataSource::Base', function () {
	
		Symbie.DataSource.PlacesInCountry = Ext.extend(Symbie.DataSource.Base, {
			
			name : __PACKAGE__,
			ID : [ 'country_id' ],
			params : undefined, 
			
			serverSideCall : [ 'SymbieOrg::Controller::DataSource::Place', 'all_in_country'],
			serverSideRoot : 'js_all_places_in_country',
			
			storeClass : 'Ext.ux.data.Store.PagedJSON',
			pagerClass : 'Symbie.Plugin.Pager.Simple',
			
			perPage : 10,

			url : '/datasource/place/all_in_country',
			authorizationRequired : false
			
		}); //eof extend
		
		Symbie.DataSource.PlacesInCountry = new Symbie.DataSource.PlacesInCountry();
		
	}); //eof use
	
}); //eof declare