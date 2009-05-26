declare( 'Symbie::DataSource::AllUsers', function (use,checkState,__PACKAGE__) {
	
	use(['Symbie::DataSource::Base','Symbie::Plugin::Pager::Simple'], function () {
	
		Symbie.DataSource.AllUsers = Ext.extend(Symbie.DataSource.Base, {
			
			name : __PACKAGE__,
			ID : [],
			params : undefined, 
			
			serverSideCall : [ 'SymbieOrg::Controller::DataSource::User', 'all'],
			serverSideRoot : 'js_all_users',
			
			storeClass : 'Ext.ux.data.Store.PagedJSON',
			pagerClass : 'Symbie.Plugin.Pager.Simple',
			
			pagerConfig : {
				perPage : 10
			},
			
			url : '/datasource/user/all',
			authorizationRequired : false
			
		}); //eof extend
		
		Symbie.DataSource.AllUsers = new Symbie.DataSource.AllUsers();
		
	}); //eof use
	
}); //eof declare

