Class('DemoApp.Widget.Footer', {
    
    isa : 'ExtX.Shotenjin.Container',
    
    use : [
        'DemoApp.Template.Base'
    ],
    

    has : {
        slots       : true,
        
        cls         : 'footer',
        
        template    : function () {
            return new DemoApp.Template.Base({
                
                /*tj
                    <div class="demoapp-footer-background"></div>
                    
                    [%\ this.a('/home') %]Home</a> |
                    
                    [%\ this.a('/sample/AnotherValue') %]Another Sample</a> |
                    
                    [%\ this.a('/specialOffer') %]Special Offer</a>
                tj*/
            })
        }
    }
    
})