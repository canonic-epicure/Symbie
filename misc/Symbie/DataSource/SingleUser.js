declare( 'Symbie::DataSource::SingleUser', function (use,checkState,__PACKAGE__) {
	
	use('Symbie::DataSource::Base', function () {

		Symbie.DataSource.SingleUser = Ext.extend(Symbie.DataSource.Base, {
			
			name : __PACKAGE__,
			ID : [ 'user_id' ],
			
			serverSideCall : [ 'SymbieOrg::Controller::DataSource::User', 'index'],
			serverSideRoot : 'js_user',
			url : '/datasource/user',
			authorizationRequired : false
			
		}); //eof extend
		
		Symbie.DataSource.SingleUser = new Symbie.DataSource.SingleUser();
		
	}); //eof use
	
}); //eof declare

