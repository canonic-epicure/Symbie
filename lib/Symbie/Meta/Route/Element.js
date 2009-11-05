Class('Symbie.Meta.Route.Element', {
    
    has : {
        token               : null,
        
        specificity         : 1,
        
        childElements       : Joose.Object
    },
    
    
    methods : {
        
        addElement : function (name, props) {
            var metaClass = props.meta || this.propertyMetaClass
            delete props.meta
            
            props.name          = name
            
            return this.childElements[name] = new metaClass(props)
        },
        
        
        addPropertyObject : function (object) {
            return this.childElements[object.name] = object
        },
        
        
        removeProperty : function (name) {
            var prop = this.childElements[name]
            
            delete this.childElements[name]
            
            return prop
        },
        
        
        haveProperty : function (name) {
            return this.childElements[name] != null
        },
        
    
        haveOwnProperty : function (name) {
            return this.haveProperty(name) && this.childElements.hasOwnProperty(name)
        },
        
        
        getProperty : function (name) {
            return this.childElements[name]
        },
        
        
        each : function (func, scope) {
            scope = scope || this
            
            Joose.O.each(this.childElements, function (property, name) {
                func.call(scope, property, name)
            })
        },
        
        
        eachOwn : function (func, scope) {
            scope = scope || this
            
            Joose.O.eachOwn(this.childElements, function (property, name) {
                func.call(scope, property, name)
            })
        }
        
    }
    
})


