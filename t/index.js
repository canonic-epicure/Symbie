var Harness
var isNode        = typeof process != 'undefined' && process.pid

if (isNode) {
    require('Task/Test/Run/NodeJSBundle')
    
    Harness = Test.Run.Harness.NodeJS
} else 
    Harness = Test.Run.Harness.Browser.ExtJS
        
    
var INC = (isNode ? require.paths : []).concat('lib', '../lib', '/jsan')



Harness.configure({
	title : 'Symbie test suite',
	
	preload : [
        'Task.Symbie.Prereq',
        {
            text : "JooseX.Namespace.Depended.Manager.my.INC = " + Ext.encode(Harness.absolutizeINC(INC))
        },
        'Task.Symbie.Core'
    ]
})


Harness.start(
	'010_route_meta.t.js'
//    ,
//	'020_route_matching_and_stringification.t.js',
//	'030_router_dispatching.t.js',
//	'040_widget_id.t.js',
//	'050_application_basics.t.js',
//	'051_application_dispatch.t.js',
//	'052_application_activation_tree_marks.t.js'
)
