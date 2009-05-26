declare( 'Symbie::DataSource::LastWallComments', function (use,checkState,__PACKAGE__) {
	
	use('Symbie::DataSource::Base', function () {
	
		Symbie.DataSource.LastWallComments = Ext.extend(Symbie.DataSource.Base, {
			
			name : __PACKAGE__,
			ID : [],
			params : undefined, 
			
			serverSideCall : [ 'SymbieOrg::Controller::DataSource::Wall', 'last_comments'],
			serverSideRoot : 'js_last_comments',
			
			storeClass : 'Ext.ux.data.Store.PagedJSON',
			pagerClass : 'Symbie.Plugin.Pager.Simple',
			
			perPage : 5,

			url : '/datasource/wall/last_comments',
			authorizationRequired : false
			
		}); //eof extend
		
		Symbie.DataSource.LastWallComments = new Symbie.DataSource.LastWallComments();
		
	}); //eof use
	
}); //eof declare

