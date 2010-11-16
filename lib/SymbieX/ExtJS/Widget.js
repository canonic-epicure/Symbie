Role('SymbieX.ExtJS.Widget', {
    
    trait       : 'JooseX.CPS',
    
    continued : {
        
        override : {
            
            run : function () {
                
                if (!Ext.Container.meta.does(SymbieX.ExtJS.Widget.Role)) 
                    Ext.Container.meta.extend({
                        does  : SymbieX.ExtJS.Widget.Role
                    })
                
                this.SUPERARG(arguments).now()
            }
        }
    }
})



Role('SymbieX.ExtJS.Widget.Role', {
    
    requires : [ 'getLayout' ],
    
    has : {
        ID      : null
    },
    
    
    methods : {
        
        getID   : function (config, context, parent) {
            return this.meta.name
        },
            
            
        activate : function (context, spec) {
            var me                  = this
            
            // get class constructor
            var widgetClass         = eval('(' + spec.xtype + ')')
            delete spec.xtype
            
            
            // get children descriptors
            var children            = spec.children
            delete spec.children
            

            var widget = this.items && this.items.find(function (item) { 
                return item.constructor == widgetClass && item.getID(spec, context, me) == item.ID 
            })
            
            
            if (!widget) {
                widget = new widgetClass(spec)
                
                widget.ID = widget.getID(widget, context, me)
                
                this.add(widget)
            }
            
            widget.touch(context, this)
            
            
            var layout = this.getLayout()
            
            if (layout.meta.hasMethod('setActiveItem')) layout.setActiveItem(widget)
            
            
            if (children) Joose.O.each(children, function (spec, name) {
                
                widget.slots[ name ].activate(context, spec)
            })
        },
        
        
        touch : function (context, parent) {
        }
    }
})