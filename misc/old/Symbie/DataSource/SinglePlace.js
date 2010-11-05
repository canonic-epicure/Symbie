declare( 'Symbie::DataSource::SinglePlace', function (use,checkState,__PACKAGE__) {
	
	use('Symbie::DataSource::Base', function () {

		Symbie.DataSource.SinglePlace = Ext.extend(Symbie.DataSource.Base, {
			
			name : __PACKAGE__,
			ID : [ 'place_id' ],
			
			serverSideCall : [ 'SymbieOrg::Controller::DataSource::Place', 'index'],
			serverSideRoot : 'js_single_place',
			url : '/datasource/place',
			authorizationRequired : false
			
		}); //eof extend
		
		Symbie.DataSource.SinglePlace = new Symbie.DataSource.SinglePlace();
		
	}); //eof use
	
}); //eof declare

