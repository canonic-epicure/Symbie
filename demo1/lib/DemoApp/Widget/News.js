Class('DemoApp.Widget.News', {
    
    isa : 'SymbieX.Template.Shotenjin.Container',
    
    use : 'DemoApp.Template.Base',
    
    
    has : {
        slots       : true,
        
        cls         : 'demoapp-widget-news',
        
        template    : function () {
            return new DemoApp.Template.Base({
                /*tj

                    <h1>This is a Template widget</h1>
                    
                    <br>
                    <p>arbitrary HTML template</p>

                tj*/

                /* GENERATED BY SHOTENJIN.JOOSED HELPER, DO NOT MODIFY DIRECTLY */
                sources : '<h1>This is a Template widget</h1>\n<br>\n<p>arbitrary HTML template</p>'
            })
        }
    }    
})