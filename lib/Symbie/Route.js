Class('Symbie.Route', {
    
    trait : 'JooseX.CPS',
    
    has : {
        root                    : { is : 'rw', required : true },
        
        router                  : null,
        routeName               : null,
        
        path                    : null,
        
        chains                  : Joose.Array
    },
    
    
    after : {
        initialize : function () {
        }
    },
    
    
    methods : {
        
        activate : function (className, config) {
        },
        
        
        forward : function (actioName) {
        },
        
        
        getParams : function () {
        },
        
        
        getPath : function () {
        }
    },
    
    
    continued : {
        
        methods : {
            
            run : function () {
                
            }
            
        }
    }
    
})


//Class('Symbie.Dispatcher.Request', {
//    
//    use : [ 'Symbie.Dispatcher.Path' ],
//    
//    has : {
//        dispatcher              : null,
//        
//        path                    : null,
//        
//        callback                : null,
//        scope                   : null,
//        
//        root                    : null
//    },
//    
//    
//    methods : {
//        
//        setPath : function (path) {
//            if (typeof path == 'string') path = new Symbie.Dispatcher.Path({
//                path : path,
//                request : this,
//                dispatcher : this.dispatcher
//            })
//            
//            this.path = path
//        },
//        
//        
//        prepareClasses : function (callback, scope, args) {
//            this.path.prepareClasses(callback, scope, args)
//        },
//        
//        
//        instantiate : function (callback, scope, args) {
//            this.path.instantiate(callback, scope, args)
//        },
//        
//        
//        prepareInstances : function () {
//        },
//        
//        
//        activate : function (callback, scope, args) {
//            this.path.activate(callback, scope, args)
//        },
//        
//
//        finalize : function () {
//            if (this.callback) this.callback.call(this.scope || this)
//        }
//    }
//    
//})
