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
            }
        },
        
        
        home : {
            map       : '/home',
            
            action      : function () {
                ACTION.push('TestApp: /home')
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
            
            PRE : function () {
                ACTION.push('TestApp: PRE')
            },
            
    
            BEGIN : function () {
                ACTION.push('TestApp: BEGIN')
            },
            
    
            END : function () {
                ACTION.push('TestApp: END')
            }
        }
    }
    
})
