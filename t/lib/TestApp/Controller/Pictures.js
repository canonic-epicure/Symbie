Class('TestApp.Controller.Pictures', {
    
    isa : 'Symbie.Controller',
    
    
    controllers     : [
        'TestApp.Controller.WikiController',
        
        {
            'SymbieX.Controller.FooBar' : {
                prefix  : '/barbaz'
            }
        }
    ],
    
    routes : {
        
        'all/:fromDate/:toDate' : {
            
            where : {
                fromDate    : /(\d\d)-(\d\d)-(\d{4})/,
                toDate      : /(\d\d-\d\d-\d{4})/
            },
            
            action      : function () {}
        },
        
        
        picture : {
            map : './:id',
            
            where : {
                id    : /\d+/
            },
            
            action      : function () {}
        },
        
        
        editPicture : {
            map : './:id/edit',
            
            where : {
                id    : /\d+/
            },
            
            action      : function () {}
        }
    }
})

