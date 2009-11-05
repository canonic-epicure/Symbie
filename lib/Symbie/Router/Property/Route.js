Class('Symbie.Router.Property.Route', {
    
    meta : Joose.Meta.Class,
    
    isa : Joose.Managed.Property,
    
    
    has : {
        mapTo                   : null,
        
        where                   : null,
        
        via                     : null
    }
    
})
