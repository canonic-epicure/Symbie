Role('Symbie.Widget', {
    
    requires : [ 'initComponent' ],
    
    use : [ 'Symbie.Widget.Attribute.ID' ],
    
    metaRoles : [ 'Symbie.Widget.Attribute.ID.Builder' ],
    
    my : {
    
        has : {
            idDefinition : function () { return {} }
        }
        
    },
    
    
    before : {
        initComponent : function (config) {
            var requiredIds = this.constructor.my.idDefinition
            
            Joose.O.each(requiredIds, function (value, name) {
                if (config[name] == null) throw "Required parameter [" + name + "] (part of [" + this.c + "]'s id is not supplied"
            })
            
            
        }
    }
})





//declare( 'Symbie::Widget', function (use,checkState,__PACKAGE__) {
//
//	
//	Ext.override(Ext.Container, {
//		
////		autoEl : 'div',
//	    
//	    /**
//	     * @cfg {String} wtype
//	     * This string must correspond to widget's package
//	     * This parameter also signals that this object is a widget in Catalyst terminology
//	     */
//		PACKAGE : undefined,
//		
//		/**
//	     * @cfg {Array} ID
//	     * In prototype of widget - Array of strings, with parameter names, which will be used to form widget's id (in Ext meaning)
//	     * During creating of intance it becames object with keys from previos array and values from configuration of widget
//	     */
//		ID : undefined,
//		
//		/**
//	     * @cfg {Boolean} authorizationRequired
//	     * Setting this config into widgets prototype will cause dispatcher to prepend the construction of this widget with "Login or Register" window 
//	     */
//		authorizationRequired : false,
//	    
//	    /**
//	     * @cfg {String} displayName
//	     * When the widget is active, this parameter will be used as browsers title
//	     */
//	    displayName : undefined,
//		
//		/**
//		 * @cfg {Boolean} disableNavigation
//		 * If true, activation of widget will not cause the creation of new navigation checkpoint 
//		 */
//	    disableNavigation : false,
//		
//		/**
//		 * @cfg {Boolean} disableBookmarking
//		 * If true, activation of widget will not cause the creation of new bookmark 
//		 */
//	    disableBookmarking : false,
//		
//		
//		/**
//		 * @cfg {Boolean} disableMasking
//		 * If true, masking of widget during loading will be disabled 
//		 */
//	    disableMasking : false,
//	    
//	    
//		/**
//		 * @cfg {String} slot
//		 * Default slot for this widget 
//		 */
//	    slot : undefined,
//		
//		/**
//		 * @cfg {Object} siblingSlots
//		 * If the widget will be setup'ed into any slot, this property will point on that slots collection 
//		 */
//	    siblingSlots : undefined,
//		
//		/**
//		 * @cfg {Object} slots
//		 * Hash of links to childrens by their mnemonic name 
//		 * If set to true, widget will accept slotted childs 
//		 */
//	    slots : undefined,
//		
//		
//		/**
//		 * @cfg {Object} prefetch
//		 * If defined in widgets prototype this will be used as parameter for Symbie::Plugin::DataSource plugin's constructor 
//		 * with the following exception. The 'param' key (which should be array of strings) will be replaced with the object, which
//		 * keys are original elements of array and values will be extracted from context's arguments.
//		 * Then new instance of Symbie::Plugin::DataSource will be created and will synchronously fetch its data.
//		 * Also in config of widget will be added shortcut to the fetched data, as DATA 
//		 */
//		prefetch : undefined,
//		
//		initComponent : function () {
//			if (this.slots) this.slots = {};
//			
//			this.addEvents('add');
//			this.on('add',Symbie.Widget.setupSlots,this);			
//
//			Symbie.Widget.intercepted['Ext.Container.prototype.initComponent'].call(this);
//		},
//		
//		
//	    /**
//	     * Force this container's layout to be recalculated. A call to this function is required after adding a new component
//	     * to an already rendered container, or possibly after changing sizing/position properties of child components.
//	     * @param {Boolean} shallow (optional) True to only calc the layout of this component, and let child components auto
//	     * calc layouts as required (defaults to false, which calls doLayout recursively for each subcontainer)
//	     */
//	    doLayout : function(shallow){
//	        if(this.rendered && this.layout){
//	            this.layout.layout();
//	        }
//	        if(shallow !== false && this.items){
//	            var cs = this.items.items;
//	            for(var i = 0, len = cs.length; i < len; i++) {
//	                var c  = cs[i];
//	                if(!c.hidden && c.doLayout){
//	                    c.doLayout();
//	                }
//	            }
//	        }
//	    }
//
//	}); //eof override
//	    
//	
//	Ext.apply(Symbie.Widget, {
//		
//		setupSlots: function(){
//			var self = this;
//			
//			var setup_slot_func = function (component){
//				if (component.slot && component != self) {
//					var has_slots = function (container, component) {
//						return !!container.slots; //toBoolean()
//					}
//					
//					var parent_with_slots = component.findParentBy(has_slots);
//					if (!parent_with_slots) { 
//						return;
//					}
//					
//					parent_with_slots.slots[component.slot] = component;
//					component.siblingSlots = parent_with_slots.slots; 
//					component.__SLOT__ = component.slot; 
//					component.__COLLECTOR__ = parent_with_slots;
//					delete component.slot;
//				}
//			};
//			
//			this.cascade(setup_slot_func);
//		},
//		
//		preprocess : function (config, __PACKAGE__) {
//			config = config || {};			
//			
//			this.PACKAGE = __PACKAGE__ || config.PACKAGE || this.PACKAGE;
//			
//			if (this.PACKAGE) {
//				//construct widget id
//				
//				var newID = {};
//				config.id = Symbie.Widget.constructWidgetId(this.PACKAGE, this.ID, config, newID);
//				this.ID = newID;
//				
//				//prefetch data if needed (sync deprecated)
////				if (this.constructor.prototype.prefetch) {
////					
////					if (console && console.info) console.info('Deprecated sync "prefetch" detected, package=' + this.PACKAGE);
////					
////					var prefetch = Ext.apply({}, this.constructor.prototype.prefetch);
////					var params = {};
////					
////					prefetch.params = prefetch.params || [];
////					for (var i = 0; i < prefetch.params.length; i++) {
////						var key = prefetch.params[i];
////						params[key] = config[key];
////					}
////					
////					prefetch.params = params;
////					prefetch.sync = true;
////					prefetch.params.meta = true;
////					
////					var store = new Ext.data.Store({
////						baseParams : prefetch.baseParams,
////						proxy : new Ext.data.HttpProxy(prefetch),						
////						reader : new Ext.data.JsonReader()
////					});
////					
////					store.load({
////						params : prefetch.params
////					});
////					
////					config.STORE = store;
////					config.DATA = store.getAt(0) ? store.getAt(0).data : null;
////				}
//				
//				if (this.constructor.prototype.PREFETCH) {
//					
//					var handlerReady = Symbie.DataManager.isReady(this.constructor.prototype.PREFETCH, { widgetParams : config });
//
//					if (!handlerReady) {
//                        
//						if (console && console.info) console.info('Synchronous PREFETCH detected, handler name=' + this.constructor.prototype.PREFETCH.name + ', package=' + this.PACKAGE);
//                        
//                        Symbie.DataManager.prefetch(this.constructor.prototype.PREFETCH, { 
//                        	widgetParams : config,
//                        	sync : true,
//                        	callback : function (handlerReady) {
//								config.DATA = handlerReady.DATA;
//								config.STORE = handlerReady.STORE;
//                        	},
//                        	scope : this
//                        });
//                        
//					} else {
//						config.DATA = handlerReady.DATA;
//						config.STORE = handlerReady.STORE;
//					} 
//					
//				}
//				
//			}
//			
//			return config;
//		},
//		
//		constructWidgetId : function (pack,ids,args,populate) {
//			var id = pack;
//			
//			ids = ids || [];
//			args = args || {};
//			ids.sort();
//			for (var i = 0; i < ids.length; i++) {
//				var key = ids[i];					
//				if (typeof args[key] == 'undefined') throw "Required parameter " + key + " is missed during creation of " + pack;
//				id += ':' + args[key];
//				
//				if (populate) populate[key] = args[key];
//			}
//			
//			id += args.slot ? ':' + args.slot : '';
//			
//			return id;
//		},
//		
//		constructWidgetChain : function (component) {
//			var chain = {};
//			
//			if (component.PACKAGE) {
//				chain.segment = component.PACKAGE;
//				chain.arguments = component.ID || {};
//			} else if (component.__SLOT__) {
//				chain.segment = '.' + component.__SLOT__;
//			} else {
//				throw "Cant construct chain for widget, componentId = " + component.id;
//			}
//			
//			return chain;
//		}
//		
//	}); //eof apply   
//	
//}); //eof declare
//
//
////
////
////declare( 'Symbie::Widget::_name_', function (use,checkState,__PACKAGE__) {
////    
////    use('Ext::ux::layout::Coolcard',function(use){
////        Symbie.Widget._name_ = Ext.extend(Ext.Panel, {
////            
////            displayName : '',
////    
////            prefetch : {
////                url : '/datasource/place',
////                params : [ 'placeid' ]
////            },
////            
////            //authorizationRequired : true,
////            //disableNavigation : true,
////            //disableBookmarking : true,
////            
////            constructor: function(config) {        
////                
////                Ext.apply(config, {
////                    
////                }); //eof apply
////                
////                Symbie.Widget._name_.superclass.constructor.call(this, config);
////            }, //eof constructor
////            
////            initComponent: function() {
////                Symbie.Widget._name_.superclass.initComponent.call(this);
////            }
////        }); //eof extend
////    }); //eof use    
////    
////}); //eof declare
////
////
////
