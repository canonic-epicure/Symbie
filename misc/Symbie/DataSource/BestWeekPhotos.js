declare( 'Symbie::DataSource::BestWeekPhotos', function (use,checkState,__PACKAGE__) {
	
	use([ 'Symbie::DataSource::Base', 'Symbie::Plugin::Pager::Simple'], function () {
	
		Symbie.DataSource.BestWeekPhotos = Ext.extend(Symbie.DataSource.Base, {
			
			name : __PACKAGE__,
			ID : [],
			params : undefined, 
			
			serverSideCall : [ 'SymbieOrg::Controller::DataSource::Photo', 'best_week_place_photos'],
			serverSideRoot : 'js_best_week_place_photos',
			
			storeClass : 'Ext.ux.data.Store.PagedJSON',
			pagerClass : 'Symbie.Plugin.Pager.Simple',
			
			perPage : 5,
			
			url : '/datasource/photo/best_week_place_photos',
			authorizationRequired : false
			
		}); //eof extend
		
		Symbie.DataSource.BestWeekPhotos = new Symbie.DataSource.BestWeekPhotos();
		
	}); //eof use
	
}); //eof declare

