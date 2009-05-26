declare( 'Symbie::DataSource::UserAccount', function (use,checkState,__PACKAGE__) {
	
	use('Symbie::DataSource::Base', function () {

		Symbie.DataSource.UserAccount = Ext.extend(Symbie.DataSource.Base, {
			
			name : __PACKAGE__,
			ID : [],
			
			serverSideCall : [ 'SymbieOrg::Controller::DataSource::User', 'account'],
			serverSideRoot : 'js_account',
			url : '/datasource/user/account',
			authorizationRequired : true
			
		}); //eof extend
		
		Symbie.DataSource.UserAccount = new Symbie.DataSource.UserAccount();
		
	}); //eof use
	
}); //eof declare

