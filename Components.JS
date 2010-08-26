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
        
        "Symbie.Meta.Widget",
        
        "Symbie.Meta.ID",
        "Symbie.ID",
        
        "Symbie.Router.Default",
        
        "Symbie.Context.Step",
        "Symbie.Context.Step.Widget",
        "Symbie.Context.Step.Slot",
        "Symbie.Context.Step.Root",
        
        "Symbie.Context",
        "Symbie.Router",
        
        "Symbie.Widget",
        "Symbie.Widget.Root",
        "Symbie.Widget.Container",
        
        "Symbie",
        "Symbie.Application"
    ],
    
    
    "Prereq" : [
        "jsan:Task.Joose.Core",
        "jsan:Task.JooseX.Attribute.Bootstrap",
        
        "jsan:JooseX.SimpleRequest",
        "jsan:Task.JooseX.Namespace.Depended.Web",

        "jsan:Task.JooseX.CPS.All",

        "jsan:JooseX.Bridge.Ext",
        "jsan:JooseX.Meta.Lazy",
        
        "jsan:Task.ExtJS.Adapter.Ext",
        "jsan:JooseX.Bridge.Ext.Convertor",
        "jsan:Task.ExtJS.All",
        
        "jsan:ExtX.Reference.Slot",
        
        "jsan:Digest.MD5"
    ],
    
    
    "Bundle" : [
        "+Prereq",
        
        "+Core"
    ]
} 
