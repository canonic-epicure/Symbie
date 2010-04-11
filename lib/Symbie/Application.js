Class('Symbie.Application', {
    
    isa     : Ext.util.Observable,
    
    meta    : JooseX.Bridge.Ext,
    
    trait   : 'JooseX.CPS',
    
    does    : [ 'Symbie.ID' ],
    
    use     : 'Symbie',
    
    
    has : {
        root            : null
    },
    
    
    methods : {
        
        setup : function () {
            this.seed()
        },
        
        
        //'root' should be instantiated here
        seed  : function () {
            throw "Abstract 'seed' method of [" + this + "] was called" 
        }
        
    },
    
    
    continued : {
        
        methods : {
            
            dispatch : function (routePath) {
                this.root.dispatch(routePath).now()
            },
            
            
            launch : function (routePath) {
                this.root.launch(routePath).now()
            },
        
        
            run : function (routePath) {
                this.setup()
                
                var me = this
                
                // Seems Ext won't fire 'onReady' if its loaded already after 'onload' event (which is the case during debugging)
                // Should be addressed in Ext itself 
                if (this.__DOM_READY__)
                    me.launch(routePath).now()
                else
                    Ext.onReady(function() {
                        me.launch(routePath).now()
                    })
            }
        }
    }
})