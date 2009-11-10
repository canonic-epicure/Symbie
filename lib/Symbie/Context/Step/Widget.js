Class('Symbie.Context.Step.Widget', {
    
    isa : 'Symbie.Context.Step',
    
    has : {
        className       : null,
        classVersion    : null,
        config          : null,
        
        widget          : null
    },
    
    
    methods : {
        
        getDependencies : function () {
            if (this.classVersion) {
                var dependency = {}
                
                dependency[this.className] = this.classVersion
            } else
                var dependency = this.className
                
            return [ dependency ]
        },
        
        
        instantiate : function (state) {
        },
        
        
        activate : function (state) {
        },

        
        finalize : function (state) {
        }
        
        
//        activate : function (className, config) {
//            
//            if (typeof className != 'string') {
//                config = className
//                
//                className = config.xtype || config.meta
//                
//                delete config.xtype
//                delete config.meta
//            }
//            
//            config = config || {}
//            
//            this.steps.push(new Symbie.Context.Step.Widget({
//                context         : this,
//                className       : className,
//                config          : config
//            }))
//        },
//        
//        
//        slot : function (slotName) {
//            this.steps.push(new Symbie.Context.Step.Slot({
//                context         : this,
//                slotName        : slotName
//            }))
//        },
        
    }
})