COMPONENTS = {
    
    "Core" : [
        "Symbie.Meta.Route.Token",
        "Symbie.Meta.Route.Token.Parameter",
        "Symbie.Meta.Route.Token.String",
        "Symbie.Meta.Route.Token.Root",
        "Symbie.Meta.Route.Token.WildCard",
        
        "Symbie.Meta.Route.Match",
        
        "Symbie.Meta.Route",
        "Symbie.Meta.Router",
        
        "Symbie.Context",
        "Symbie.Router",
        
        "Symbie",
        "Symbie.Application"
    ],
    
    
    "Prereq" : [
        "jsan:Task.Joose.Core",
        
        "jsan:Task.JooseX.Attribute.Bootstrap",
        "jsan:Task.JooseX.Namespace.Depended.Auto",
        "jsan:Task.JooseX.CPS.All",
        
        "jsan:Task.JooseX.Observable.Core"
    ],
    
    
    "Bundle" : [
        "+Prereq",
        
        "+Core"
    ]
} 
