Class('DemoApp.Widget.Footer', {
    
    isa : 'ExtX.Shotenjin.Container',
    
    use : [
        'SymbieX.ExtJS.Shotenjin'
    ],
    

    has : {
        slots       : true,
        
        cls         : 'footer',
        
        template    : function () {
            return new SymbieX.ExtJS.Shotenjin({
                
                /*tj
                    <div class="demoapp-footer-background"></div>
                    
                    [%\ this.a('/home') %]Home</a> |
                    
                    [%\ this.a('/sample/AnotherValue') %]Another Sample</a> |
                    
                    [%\ this.a('/special-offer') %]Special Offer</a>
                tj*/
            })
        }
    }
    
})