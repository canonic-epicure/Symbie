Role('SymbieX.ExtJS.DomReady', {
    
    trait       : 'JooseX.CPS',
    
    
    methods : {
        
        onDomReady : function () {
        }
    },
    
    
    continued : {
        
        override : {
            
            setup : function () {
                var me      = this
                
                this.AND(function () {
                    
                    var CONTINUE = this.getCONTINUE()
                    
                    Ext.onReady(function () {
                        
                        me.onDomReady()
                        
                        CONTINUE()
                    })
                })
                
                this.SUPER().now()
            }
        }
    },
    
})