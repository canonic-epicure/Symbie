Role('SymbieX.ExtJS.Shotenjin.Template', {

    requires : [ 'echoRaw' ],

    
    methods : {
        
        a : function () {
            return this.openLink.apply(this, arguments)
        },
        
        
        openLink : function (routeName, parameters, attributes) {
            var href
            
            if (/[/?#]/.test(routeName)) 
                href = routeName
            else {
                if (!this.getRoute) throw "Can't calculate 'href' for link - no 'getRoute' method"
                
                href = this.getRoute(routeName).asString(parameters)
            }
                
            attributes = attributes || {}
            attributes.href = '#!' + href
            attributes['class'] = attributes['class'] || ''
            
            attributes['class'] += ' symbie-link'
            
            var html = '<a '
            
            Joose.O.each(attributes, function (value, name) {
                html += name + '="' + value + '" '
            })
            
            this.echoRaw(html + '>')
        },
        
        
        closeLink : function () {
            this.echoRaw('</a>')
        }
        
    }
})
