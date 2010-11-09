Class('TestApp.Controller.WikiController', {
    
    isa : 'Symbie.Controller',
    
    prefix  : 'wiki',
    
    routes : {
        
        editWiki : {
            map         : './edit',
            action      : function () {}
        },
        
        
        wikiPage : {
            map : './:page',
            
            where : {
                page    : /\d+/
            },
            
            action      : function () {}
        },
        
        
        catchAll : {
            map         : '*',
            action      : function () {}
        }
    }
})
