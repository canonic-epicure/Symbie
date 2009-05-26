declare( 'Symbie::DataSource::UserPlaces', function (use,checkState,__PACKAGE__) {
	
	use('Symbie::DataSource::Base', function () {
	
		Symbie.DataSource.UserPlaces = Ext.extend(Symbie.DataSource.Base, {
			
			name : __PACKAGE__,
			ID : [ 'user_id', 'creatorRel' ],
			params : undefined, 
			
			serverSideCall : [ 'SymbieOrg::Controller::DataSource::Place', 'users'],
			serverSideRoot : 'js_usersplaces',
			
			storeClass : 'Ext.ux.data.Store.PagedJSON',
			pagerClass : 'Symbie.Plugin.Pager.Simple',
			
			perPage : 8,

			url : '/datasource/place/users',
			authorizationRequired : false
			
		}); //eof extend
		
		Symbie.DataSource.UserPlaces = new Symbie.DataSource.UserPlaces();
		
	}); //eof use
	
}); //eof declare

