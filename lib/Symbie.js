Class('Symbie', {
    
    my : {
        
        methods : {
            
            extractRoutePath : function () {
                var loc = window.location
                
                var prefix = loc.protocol + '//' + loc.hostname
                
                return loc.href.replace(prefix, '')
            }
        }
    }
    
})