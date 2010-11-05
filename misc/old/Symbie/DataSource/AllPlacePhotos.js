declare( 'Symbie::DataSource::AllPlacePhotos', function (use,checkState,__PACKAGE__) {
	
	use(['Symbie::DataSource::Base','Symbie::Plugin::Pager::Fluid'], function () {
	
		Symbie.DataSource.AllPlacePhotos = Ext.extend(Symbie.DataSource.Base, {
			
			name : __PACKAGE__,
			ID : [],
			params : undefined, 
			
			serverSideCall : [ 'SymbieOrg::Controller::DataSource::Photo', 'all_places'],
			serverSideRoot : 'js_all_placephotos',
			
			storeClass : 'Ext.ux.data.Store.PagedJSON',
			pagerClass : 'Symbie.Plugin.Pager.Fluid',
			
			pagerConfig : {
				perPage : 20
			},
			
			url : '/datasource/photo/all_places',
			authorizationRequired : false
			
		}); //eof extend
		
		Symbie.DataSource.AllPlacePhotos = new Symbie.DataSource.AllPlacePhotos();
		
	}); //eof use
	
}); //eof declare

