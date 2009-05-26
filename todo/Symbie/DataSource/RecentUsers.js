declare( 'Symbie::DataSource::RecentUsers', function (use,checkState,__PACKAGE__) {
	
	use(['Symbie::DataSource::Base','Symbie::Plugin::Pager::Fluid'], function () {
	
		Symbie.DataSource.RecentUsers = Ext.extend(Symbie.DataSource.Base, {
			
			name : __PACKAGE__,
			ID : [],
			params : undefined, 
			
			serverSideCall : [ 'SymbieOrg::Controller::DataSource::User', 'recent'],
			serverSideRoot : 'js_recent_users',
			
			storeClass : 'Ext.ux.data.Store.PagedJSON',
			pagerClass : 'Symbie.Plugin.Pager.Fluid',
			
			pagerConfig : {
				perPage : 4,
				minPerPage : 2
			},
			
			url : '/datasource/user/recent',
			authorizationRequired : false
			
		}); //eof extend
		
		Symbie.DataSource.RecentUsers = new Symbie.DataSource.RecentUsers();
		
	}); //eof use
	
}); //eof declare

