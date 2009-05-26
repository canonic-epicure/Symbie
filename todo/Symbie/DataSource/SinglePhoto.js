declare( 'Symbie::DataSource::SinglePhoto', function (use,checkState,__PACKAGE__) {
	
	use('Symbie::DataSource::Base', function () {

		Symbie.DataSource.SinglePhoto = Ext.extend(Symbie.DataSource.Base, {
			
			name : __PACKAGE__,
			ID : [ 'photo_id' ],
			
			serverSideCall : [ 'SymbieOrg::Controller::DataSource::Photo', 'index'],
			serverSideRoot : 'js_photo',
			url : '/datasource/photo',
			authorizationRequired : false
			
		}); //eof extend
		
		Symbie.DataSource.SinglePhoto = new Symbie.DataSource.SinglePhoto();
		
	}); //eof use
	
}); //eof declare

