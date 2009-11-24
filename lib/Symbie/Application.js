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
            
            launch : function (routePath) {
                this.root.launch(routePath).now()
            },
        
        
            run : function (routePath) {
                
                this.setup()
                
                var me = this
                var CONT = this.getCONTINUE()
                
                Ext.onReady(function() {
                    me.launch(routePath).next(CONT)
                })
            }
        }
    }
})