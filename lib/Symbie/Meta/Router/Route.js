Class('Symbie.Meta.Router.Route', {
    
    meta : Joose.Meta.Class,
    
    isa : Joose.Managed.Property,
    
    
    has : {
        mapTo                   : null,
        
        where                   : null,
        
        via                     : null
    },
    
    
    methods : {
        
        prepareApply : function (targetClass) {
        },
        
        
        apply : function (target) {
        },
        
        
        unapply : function (from) {
        }
    }
    
})
