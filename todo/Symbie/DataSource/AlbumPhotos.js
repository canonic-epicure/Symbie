declare( 'Symbie::DataSource::AlbumPhotos', function (use,checkState,__PACKAGE__) {
	
	use([ 'Symbie::DataSource::Base', 'Symbie::Plugin::Pager::Simple'], function () {
	
		Symbie.DataSource.AlbumPhotos = Ext.extend(Symbie.DataSource.Base, {
			
			name : __PACKAGE__,
			ID : [ 'album_id' ],
			params : undefined, 
			
			serverSideCall : [ 'SymbieOrg::Controller::DataSource::Album', 'photos'],
			serverSideRoot : 'js_album_photos',
			
			storeClass : 'Ext.ux.data.Store.PagedJSON',
			pagerClass : 'Symbie.Plugin.Pager.Simple',
			
			perPage : 7,
			
			url : '/datasource/album/photos',
			authorizationRequired : false
			
		}); //eof extend
		
		Symbie.DataSource.AlbumPhotos = new Symbie.DataSource.AlbumPhotos();
		
	}); //eof use
	
}); //eof declare

