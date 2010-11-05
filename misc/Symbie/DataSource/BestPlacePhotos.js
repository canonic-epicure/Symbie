declare( 'Symbie::DataSource::BestPlacePhotos', function (use,checkState,__PACKAGE__) {
	
	use(['Symbie::DataSource::Base','Symbie::Plugin::Pager::Simple'], function () {
	
		Symbie.DataSource.BestPlacePhotos = Ext.extend(Symbie.DataSource.Base, {
			
			name : __PACKAGE__,
			ID : [],
			params : undefined, 
			
			serverSideCall : [ 'SymbieOrg::Controller::DataSource::Photo', 'best_placephotos'],
			serverSideRoot : 'js_best_placephotos',
			
			storeClass : 'Ext.ux.data.Store.PagedJSON',
			pagerClass : 'Symbie.Plugin.Pager.Simple',
			
			pagerConfig : {
				perPage : 5
			},
			
			url : '/datasource/photo/best_placephotos',
			authorizationRequired : false
			
		}); //eof extend
		
		Symbie.DataSource.BestPlacePhotos = new Symbie.DataSource.BestPlacePhotos();
		
	}); //eof use
	
}); //eof declare

