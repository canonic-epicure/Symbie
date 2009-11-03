Class('Symbie.Router', {
    
    trait : 'Symbie.Router.Meta',
    
    has : {
        root            : { required : true },
        
        routes          : Joose.Array
    },
    
    
    after : {
        initialize : function () {
        }
    },
    
    
    methods : {
        
//        dispatch : function () {
//            this.dispatcher.dispatch.apply(this.dispatcher, arguments)
//        }
        
    }
    
})
