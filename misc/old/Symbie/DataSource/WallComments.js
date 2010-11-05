declare( 'Symbie::DataSource::WallComments', function (use,checkState,__PACKAGE__) {
	
	use('Symbie::DataSource::Base', function () {
	
		Symbie.DataSource.WallComments = Ext.extend(Symbie.DataSource.Base, {
			
			name : __PACKAGE__,
			ID : [ 'wall_id' ],
			params : undefined, 
			
			serverSideCall : [ 'SymbieOrg::Controller::DataSource::Wall', 'comments'],
			serverSideRoot : 'js_wall_comments',
			
			storeClass : 'Ext.ux.data.Store.PagedJSON',
			pagerClass : 'Symbie.Plugin.Pager.Simple',
			
			perPage : 30,

			url : '/datasource/wall/comments',
			authorizationRequired : false
			
		}); //eof extend
		
		Symbie.DataSource.WallComments = new Symbie.DataSource.WallComments();
		
	}); //eof use
	
}); //eof declare

