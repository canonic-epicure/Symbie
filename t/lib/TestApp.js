Class('TestApp', {
    
    isa             : 'Symbie.Application',
    
    trait           : 'JooseX.Class.Singleton',
    
    controllers     : [
        'TestApp.Controller.Pictures',
        'TestApp.Controller.WikiController',
        {
            'SymbieX.Controller.FooBar' : {
                prefix  : '/barbaz'
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
            action      : function () {}
        },
        
        
        home : {
            map       : '/home',
            action      : function () {}
        }
    }
})
