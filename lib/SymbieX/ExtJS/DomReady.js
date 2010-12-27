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
                
                // this.AND will switch the continuation in the parallael mode
                // and this.SUPER action will be executed along with Ext.onReady() 
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
    }
})
