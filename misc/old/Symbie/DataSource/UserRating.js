declare( 'Symbie::DataSource::UserRating', function (use,checkState,__PACKAGE__) {
	
	use('Symbie::DataSource::Base', function () {

		Symbie.DataSource.UserRating = Ext.extend(Symbie.DataSource.Base, {
			
			name : __PACKAGE__,
			ID : [ 'rating_id' ],
			
			serverSideCall : [ 'SymbieOrg::Controller::DataSource::Rating', 'user_rating'],
			serverSideRoot : 'js_user_rating',
			url : '/datasource/rating/user_rating',
			authorizationRequired : true
			
		}); //eof extend
		
		Symbie.DataSource.UserRating = new Symbie.DataSource.UserRating();
		
	}); //eof use
	
}); //eof declare

