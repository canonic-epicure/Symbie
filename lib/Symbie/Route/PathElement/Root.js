Class('Symbie.Dispatcher.PathElement.Root', {
    
    isa : 'Symbie.Dispatcher.PathElement',
    
    methods : {
        
        pickupComponent : function () {
            return this.path.request.root
        }
        
    }
    
})


