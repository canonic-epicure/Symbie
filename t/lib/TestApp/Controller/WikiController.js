Class('TestApp.Controller.WikiController', {
    
    isa : 'Symbie.Controller',
    
    prefix  : 'wiki',
    
    routes : {
        
        INDEX : {
            map         : '',
            
            action      : function () {
                ACTION.push('TestApp.Controller.WikiController: INDEX')
                
                this.CONTINUE()
            }
        },
        
        
        editWiki : {
            map         : 'edit',
            
            action      : function () {
                ACTION.push('TestApp.Controller.WikiController: editWiki')
                
                this.CONTINUE()
            }
        },
        
        
        wikiPage : {
            map         : ':page',
            
            where : {
                page    : /\d+/
            },
            
            action      : function () {
                ACTION.push('TestApp.Controller.WikiController: wikiPage')
                
                this.CONTINUE()
            }
        },
        
        
        catchAll : {
            map         : '*',
            
            action      : function () {
                ACTION.push('TestApp.Controller.WikiController: catchAll')
                
                this.CONTINUE()
            }
        }
    },
    
    
    methods : {
        
        ACTIVATE : function () {
            ACTION.push('TestApp.Controller.WikiController: ACTIVATE')
        },
        

        FINALIZE : function () {
            ACTION.push('TestApp.Controller.WikiController: FINALIZE')
        }
    },
    
    
    continued : {
        
        methods : {
            
            PRE : function (context) {
                ACTION.push('TestApp.Controller.WikiController: PRE')
                
                this.SUPER(context).now()
            },
            
    
            BEGIN : function (context) {
                ACTION.push('TestApp.Controller.WikiController: BEGIN')
                
                this.SUPER(context).now()
            },
            
    
            END : function (context) {
                ACTION.push('TestApp.Controller.WikiController: END')
                
                this.SUPER(context).now()
            }
        }
    }
    
})
