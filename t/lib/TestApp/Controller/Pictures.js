Class('TestApp.Controller.Pictures', {
    
    isa : 'Symbie.Controller',
    
    
    controllers     : [
        'TestApp.Controller.WikiController',
        
        {
            'SymbieX.Controller.FooBar' : {
                prefix  : 'foobar/prefix'
            }
        }
    ],
    
    routes : {
        
        './all/:fromDate/:toDate' : {
            
            where : {
                fromDate    : /(\d\d)-(\d\d)-(\d{4})/,
                toDate      : /(\d\d-\d\d-\d{4})/
            },
            
            action      : function (c, fromDate, toDate) {
                ACTION.push('TestApp.Controller.Pictures: ./all/:fromDate/:toDate')
                
                var t = c.dispatchParams.t
                
                if (t) {
                    
                    t.ok(fromDate == c.getParam('fromDate'),    'Correct param #1')
                    t.ok(fromDate[1] == '12',                   'Correct param #1')
                    t.ok(fromDate[2] == '34',                   'Correct param #1')
                    t.ok(fromDate[3] == '1234',                 'Correct param #1')
                    
                    t.ok(toDate == c.getParam('toDate'),        'Correct param #2')
                    t.ok(toDate == '56-78-5678',                'Correct param #2')
                    
                    t.ok(c.app() == TestApp(), 'Correct value for `c.app()`')
                    
                    t.ok(c.getRoute() == TestApp.Controller.Pictures.meta.getRoute('./all/:fromDate/:toDate'), 'Correct route in context')
                    t.isaOk(c.controller, TestApp.Controller.Pictures, 'Correct controller in context')
                    
                    t.ok(this == c.controller, "Action is running in the controller's scope")
                }
                
                this.CONTINUE()
            }
        },
        
        
        '/glob/picture' : {
            
            where : {
                id    : /\d+/
            },
            
            action      : function () {
                ACTION.push('TestApp.Controller.Pictures: /glob/picture')
                
                this.CONTINUE()
            }
        },
        
        
        editPicture : {
            map : './:id/edit',
            
            where : {
                id    : /\d+/
            },
            
            action      : function () {
                ACTION.push('TestApp.Controller.Pictures: ./:id/edit')
                
                this.CONTINUE()
            }
        }
    },
    
    
    methods : {
        
        ACTIVATE : function () {
            ACTION.push('TestApp.Controller.Pictures: ACTIVATE')
        },
        

        FINALIZE : function () {
            ACTION.push('TestApp.Controller.Pictures: FINALIZE')
        }
    },
    
    
    continued : {
        
        methods : {
            
            PRE : function (context) {
                ACTION.push('TestApp.Controller.Pictures: PRE')
                
                this.SUPER(context).now()
            },
            
    
            BEGIN : function (context) {
                ACTION.push('TestApp.Controller.Pictures: BEGIN')
                
                this.SUPER(context).now()
            },
            
    
            END : function (context) {
                ACTION.push('TestApp.Controller.Pictures: END')
                
                this.SUPER(context).now()
            }
        }
    }
    
})

