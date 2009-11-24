Class('DemoApp.Router', {
    
    isa : 'Symbie.Router',
    
    does : [ 'SymbieX.History.Router' ],
    
    routes : {
        
        home : {
            mapTo : '/home',
            
            via : function (context, root) {
                //root == this, btw
                
                var layout = root.findOrCreate('DemoApp.Layout.Site')
                
                layout.slot('header').findOrCreate('DemoApp.Widget.Header', {
                    headerPk : 1
                })
                
                layout.slot('center').findOrCreate('DemoApp.Widget.Home')
                
                layout.slot('footer').findOrCreate('DemoApp.Widget.Footer', {
                    footerPk : 1
                })
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
                var layout = root.findOrCreate('DemoApp.Layout.Site')
                
                layout.slot('header').findOrCreate('DemoApp.Widget.Header', {
                    headerPk : 1
                })
                
                layout.slot('center').findOrCreate('DemoApp.Widget.Sample', {
                    pkField : 1
                })
                
                layout.slot('footer').findOrCreate('DemoApp.Widget.Footer', {
                    footerPk : 1
                })
            }
        },
        
        
        mainLayout : {
            via : function (context, root) {
                var layout = root.findOrCreate('DemoApp.Layout.Site')
                
                layout.slotAndMark('header').findOrCreate('DemoApp.Widget.Header', {
                    headerPk : 1
                })
                
                layout.slot('center').mark('center')
                
                layout.slotAndMark('footer')
            }
        },
        
        
        home2 : {
            mapTo : '/home2',
            
            via : function (context, root) {
                root.collectFrom('mainLayout')
                
                context.getMark('center').findOrCreate('DemoApp.Widget.Home')
                
                context.getMark('footer').findOrCreate('DemoApp.Widget.Footer', {
                    footerPk : 1
                })
            }
        }
        
    }
    //eof routes
       
})
