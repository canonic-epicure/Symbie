Class('DemoApp.Control.Button', {
    
    xtype : 'demoapp-control-button',
    
    isa : Ext.Container,
    
    use : 'DemoApp.Template.Base',    
    
    has : {
        
        text        : ' - button text -',
        
        cls         : 'demoapp-control-button-wrapper',
        
        iconCls     : '',
        
        slots       : true,
        
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

                /* GENERATED BY SHOTENJIN.JOOSED HELPER, DO NOT MODIFY DIRECTLY */
                sources : '[%\\ this.a(dispatchTo) %]\n<div class="demoapp-control-button-imageholder [% iconCls %]">\n</div>\n[% text %]\n</a>'
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