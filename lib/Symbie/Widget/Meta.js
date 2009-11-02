Role('Symbie.Widget.Meta', {
    
    has : {
        widgetId : Joose.Array
    },
    
    
    builder : {
        
        methods : {
            
            id : function (targetMeta, info) {
                
                var id = targetMeta.widgetId
                
                var props = {}
                
                Joose.O.each(info, function (value, name) {
                    if (typeof value != 'object' || value == null) value = { init : value }
                    
                    value.required = true
                    
                    props[name] = value
                    
                    id.push(name)
                })
                
                targetMeta.builder.has(targetMeta, props)
                
                id.sort()
            }
            
        }
        //eof methods
    }
    //eof builder
})