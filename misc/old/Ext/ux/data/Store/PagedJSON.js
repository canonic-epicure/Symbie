declare( 'Ext::ux::data::Store::PagedJSON', function (use, checkState, __PACKAGE__){

    use(['Ext::ux::data::Store::Paged'],function(){
        
		Ext.ux.data.Store.PagedJSON = Ext.extend(Ext.ux.data.Store.Paged, {

            constructor: function(config) {        
				Ext.ux.data.Store.PagedJSON.superclass.constructor.call(this, Ext.apply(config, {
			        proxy: !config.data ? new Ext.data.HttpProxy({url: config.url}) : undefined,
			        reader: new Ext.data.JsonReader(config, config.fields),
					pager : config.perPage && !config.pager ? {perPage : config.perPage} : config.pager
			    }));
            } //eof constructor
		    			
        }); //eof extend
		
    }); //eof use

}); //eof declare