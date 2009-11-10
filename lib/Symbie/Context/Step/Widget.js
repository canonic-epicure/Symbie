Class('Symbie.Context.Step.Widget', {
    
    isa : 'Symbie.Context.Step',
    
    has : {
        className       : null,
        classVersion    : null,
        config          : null,
        
        widget          : null
    },
    
    
    methods : {
        
        getUsedClasses : function () {
            if (this.classVersion) {
                var dependency = {}
                
                dependency[this.className] = this.classVersion
            } else
                var dependency = this.className
                
            return [ dependency ]
        },
        
        
        prepareStepSync : function () {
            var widgetClass = eval(this.className)
            
            if (widgetClass.meta instanceof Joose.Namespace.Keeper) throw "Class of widget [" + this.className + "] was not loaded"
            
            this.widget
            
            var meta = widgetClass.meta
            
            
            
        },
        
        
        activateStep : function () {
        },

        
        finalizeStep : function () {
        },
        
        
        activate : function (className, config) {
            var classVersion
            
            if (typeof className != 'string') {
                config = className
                
                className = config.xtype || config.meta
                classVersion = config.VERSION
                
                delete config.xtype
                delete config.meta
                delete config.VERSION
            }
            
            config = config || {}
            
            return this.addChild(new Symbie.Context.Step.Widget({
                context         : this.context,
                
                className       : className,
                classVersion    : classVersion,
                config          : config
            }))
        },
        
        
        slot : function (slotName) {
            return this.addChild(new Symbie.Context.Step.Slot({
                context         : this,
                slotName        : slotName
            }))
        }
        
    }
})