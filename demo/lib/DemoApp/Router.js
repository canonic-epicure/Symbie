Class('DemoApp.Router', {
    
    isa : 'Symbie.Router',
    
    does : [ 'SymbieX.History.Router', 'SymbieX.Template.Shotenjin' ],
    
    routes : {
        
        mainLayout : {
            via : function (context, root) {
                var layout = root.findOrCreate('DemoApp.Layout.Site')
                
                layout.slotAndMark('header').findOrCreate('DemoApp.Widget.Header')
                
                layout.slot('center').mark('center')
                
                layout.slotAndMark('footer').findOrCreate('DemoApp.Widget.Footer')
            }
        },
        
        
        home : {
            mapTo : '/home',
            
            via : function (context, root) {
                root.collectFrom('mainLayout')
                
                context.getMark('center').findOrCreate('DemoApp.Widget.Home')
            } 
        },
        
        
        index : {
            mapTo : '/',
            
            via : function (context, root) {
                root.collectFrom('home')
            }
        },
        
        
        sample : {
            mapTo : '/sample',
            
            via : function (context, root) {
                root.collectFrom('mainLayout')
                
                context.getMark('center').findOrCreate('DemoApp.Widget.Sample')
            }
        },
        
        
        specialOffer : {
            mapTo : '/special-offer',
            
            via : function (context, root) {
                root.collectFrom('mainLayout')
                
                context.getMark('center').findOrCreate('DemoApp.Widget.SpecialOffer')
            }
        },
        
        
        'default' : {
            mapTo : '/*',
            
            via : function (context, root) {
                root.findOrCreate('DemoApp.Widget.NotFound')
            }
        }
        
    }
    //eof routes
       
})
