Role('Symbie.Router.Meta', {
    
    builder : {
        
        methods : {
            
            draw : function (targetMeta, draw) {
                targetMeta.stem.properties.attributes.addProperty('drawFunc', { init : draw })
            }
            
        }
        
    }
})