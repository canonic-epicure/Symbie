Class('TestApp', {
    
    isa             : 'Symbie.Application',
    
    trait           : 'JooseX.Class.Singleton',
    
    controllers     : [
        'TestApp.Controller.Pictures',
        'TestApp.Controller.WikiController',
        {
            'SymbieX.Controller.FooBar' : {
                prefix  : 'barbaz'
            }
        }
    ],
    
    
    plugins         : {
        'SymbieX.SomePlugin' : {
            option1     : 'value1',
            option2     : 'value2'
        }
    },
    
    
    routes : {
        
        '/' : {
            action      : function () {
                ACTION.push('TestApp: /')
                
                this.CONTINUE()
            }
        },
        
        
        home : {
            map       : '/home',
            
            action      : function () {
                ACTION.push('TestApp: /home')
                
                this.CONTINUE()
            }
        }
    },
    
    
    methods : {
        
        ACTIVATE : function () {
            ACTION.push('TestApp: ACTIVATE')
        },
        

        FINALIZE : function () {
            ACTION.push('TestApp: FINALIZE')
        }
    },
    
    
    continued : {
        
        methods : {
            
            PRE : function (context) {
                ACTION.push('TestApp: PRE')
                
                if (window.TEST_PRE) {
                    this.CONTINUE(false)
                    
                    return
                }
                
                this.SUPER(context).now()
            },
            
    
            BEGIN : function (context) {
                ACTION.push('TestApp: BEGIN')
                
                this.SUPER(context).now()
            },
            
    
            END : function (context) {
                ACTION.push('TestApp: END')
                
                this.SUPER(context).now()
            }
        }
    }
    
})
