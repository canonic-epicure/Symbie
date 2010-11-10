Class('SymbieX.Controller.FooBar', {
    
    isa : 'Symbie.Controller',
    
    prefix  : 'symbiex',
    
    routes : {
        
        'foobar/*' : {
            
            action      : function () {
                ACTION.push('SymbieX.Controller.FooBar: foobar/*')
                
                this.CONTINUE()
            }
        }
    },
    
    methods : {
        
        ACTIVATE : function () {
            ACTION.push('SymbieX.Controller.FooBar: ACTIVATE')
        },
        

        FINALIZE : function () {
            ACTION.push('SymbieX.Controller.FooBar: FINALIZE')
        }
    },
    
    
    continued : {
        
        methods : {
            
            PRE : function (context) {
                ACTION.push('SymbieX.Controller.FooBar: PRE')
                
                this.SUPER(context).now()
            },
            
    
            BEGIN : function (context) {
                ACTION.push('SymbieX.Controller.FooBar: BEGIN')
                
                this.SUPER(context).now()
            },
            
    
            END : function (context) {
                ACTION.push('SymbieX.Controller.FooBar: END')
                
                this.SUPER(context).now()
            }
        }
    }
    
})

