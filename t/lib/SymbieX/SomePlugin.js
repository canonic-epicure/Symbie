Role('SymbieX.SomePlugin', {
    
    trait       : 'JooseX.CPS',
    
    
    continued   : {
        
        override : {
            
            PRE    : function (context) {
                ACTION.push('SymbieX.SomePlugin: PRE')
                
                this.SUPER(context).now()
            }
        },
        
        
        after : {
            
            BEGIN : function () {
                ACTION.push('SymbieX.SomePlugin: BEGIN')
                
                this.CONTINUE()
            }
        },
        
        before : {
            
            END     : function () {
                ACTION.push('SymbieX.SomePlugin: END')
                
                this.CONTINUE()
            }
        }
    }
})
