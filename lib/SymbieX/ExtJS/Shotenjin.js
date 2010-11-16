Role('SymbieX.ExtJS.Shotenjin', {
    
    /*VERSION,*/
    
    requires        : [ 'onDomReady' ],
    
    
    after : {

        onDomReady : function () {
            Ext.getBody().on('click', this.onBodyClick, this)
        }
    },
    
    
    methods : {
        
        onBodyClick : function (event, target, options) {
            var linkEl = event.getTarget('.symbie-link', 20)
        
            if (linkEl) {
                event.stopEvent()
                
                var href = Ext.fly(linkEl).getAttribute('href')
                
                href = href.replace(/[^#]*#!?(.*)/, '$1')
                
                this.dispatch(href).now()
            }
        }
    }
    
})