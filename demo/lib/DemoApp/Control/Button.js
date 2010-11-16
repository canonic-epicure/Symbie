Class('DemoApp.Control.Button', {
    
    isa : Ext.Container,
    
    use : [
        'DemoApp.Template.Base'
    ],
    
    has : {
        
        text        : ' - button text -',
        
        cls         : 'demoapp-control-button-wrapper',
        
        iconCls     : '',
        
        dispatchTo  : null,
        
        template    : function () {
            return new DemoApp.Template.Base({
                
                /*tj
                    [%\ this.a(dispatchTo) %]            
                        
                        <div class="demoapp-control-button-imageholder [% iconCls %]">
                        </div>
                        
                        [% text %]
                    </a>
                tj*/
            })
        }
    },
    
    
    after : {
        onRender : function () {
            
            this.el.update(this.template.render({ 
                dispatchTo  : this.dispatchTo,
                iconCls     : this.iconCls,
                text        : this.text
            }))
        }
    }

})