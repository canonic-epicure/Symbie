declare( 'Symbie::DataSource::BestCountries', function (use,checkState,__PACKAGE__) {
	
	use([ 'Symbie::DataSource::Base', 'Symbie::Plugin::Pager::Fluid'], function () {
	
		Symbie.DataSource.BestCountries = Ext.extend(Symbie.DataSource.Base, {
			
			name : __PACKAGE__,
			ID : [],
			params : undefined, 
			
			serverSideCall : [ 'SymbieOrg::Controller::DataSource::Country', 'best'],
			serverSideRoot : 'js_best_countries',
			
			storeClass : 'Ext.ux.data.Store.PagedJSON',
			pagerClass : 'Symbie.Plugin.Pager.Fluid',
			
			minPerPage : 5,
			perPage : 8,
			
			url : '/datasource/country/best',
			authorizationRequired : false
			
		}); //eof extend
		
		Symbie.DataSource.BestCountries = new Symbie.DataSource.BestCountries();
		
	}); //eof use
	
}); //eof declare

