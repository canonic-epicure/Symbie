Class('Symbie.Dispatcher.PathElement.Root.Global', {
    
    isa : 'Symbie.Dispatcher.PathElement.Root',
    
    methods : {
        
        pickupComponent : function () {
            return this.path.dispatcher.application.root
        }
        
    }
    
})


