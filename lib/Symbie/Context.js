Class('Symbie.Context', {
    
    trait : 'JooseX.CPS',
    
    has : {
        router                  : null,
        
        match                   : null,
        
        parameters              : Joose.Object,
        
        steps                   : Joose.Array
    },
    
    
//    after : {
//        initialize : function () {
//        }
//    },
//    
//    
    methods : {
        
        activate : function (className, config) {
        },
        
        
        forward : function (actioName) {
        },
        
        
        getParams : function () {
        },
        
        
        getPath : function () {
        },
        
        
        getRoute : function () {
            return this.match.route
        }
        
    },
    
    
    continued : {
        
        methods : {
            
            run : function () {
                var via = this.getRoute().via
                
                via.call(this, this)
                
                this.prepareClasses()
                this.instantiate()
                this.prepareInstances()
                this.activate()
                this.finalize()
                
                this.now()
            },
            
            
            prepareClasses : function () {
            },
            
            
            instantiate : function (callback, scope, args) {
            },
            
            
            prepareInstances : function () {
            },
            
            
            activate : function () {
            },
            
    
            finalize : function () {
            }
            
        }
    }
    
})
s