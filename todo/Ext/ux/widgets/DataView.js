declare( 'Ext::ux::widgets::DataView', function (use, checkState, __PACKAGE__){

    use(['Ext::ux::layout::Thumbnail', 'Ext::ux::widgets::DataViewContainer', 'Ext::ux::element::Background'],function(){
		
		Ext.ux.widgets.DataView = Ext.extend(Ext.ux.widgets.DataViewContainer, {
			
			itemSelector : 'div.thumbnail',
			itemClass : Ext.Container,
			
			deferEmptyText: false,
			
			jemplateInstance : undefined,
			jemplate : undefined,
			jemplateData : undefined,
			
			backgroundClass : undefined,
			backgroundAdjustments : undefined,
			
			emptyTextI18n : undefined,
			emptyCls : undefined,
			
            constructor: function(config) {        
				Ext.ux.widgets.DataView.superclass.constructor.call(this, config);
            }, //eof constructor
            
			
            initComponent: function() {
				Ext.ux.widgets.DataView.superclass.initComponent.call(this);
				
				this.backgroundAdjustments = this.backgroundAdjustments || {};
				
				this.getLayout();
				this.initItems();
				
	            if(typeof this.layout == 'string'){
	                this.layout = new Ext.Container.LAYOUTS[this.layout.toLowerCase()](this.layoutConfig);
	                this.setLayout(this.layout);
	            }
				
				
				delete this.all;
				this.all = new Ext.ux.widgets.DataView.CompositeElementLiteProxy(undefined, this);
				
				this.on('add',this.onNewThumbnail, this);
				this.subscribe('languageChanged', this.refresh, this);
			}, //eof initComponent

			
			refresh : function(){
				this.emptyText = eval(this.emptyTextI18n) || this.emptyText;
				
				this.clearSelections(false, true);
				this.all.clear();
		        
				var records = this.store.getRange();
		        
                if (records.length < 1) {
                    
                    if (!this.deferEmptyText || this.hasSkippedEmptyText) {
                        //XXX hack for layouts with innerCt
                    	if (this.getLayout() instanceof Ext.ux.layout.Thumbnail) {
                    		if (!this.getLayout().innerCt) this.doLayout();
                    	}
                    	
                        var target = this.getLayout().innerCt || this.el;
                        target.update('<div class="centered ' + this.emptyCls +' empty_text">' + this.emptyText + '</div>');
                        target.child('.empty_text').center(target);
                    }
                    this.hasSkippedEmptyText = true;
                    return;
                }
                
				this.all.fill(this.bufferRender(records, 0));
                this.updateIndexes(0);

                this.doLayout();
		    },
		    
		    
		    setStore : function(store, initial){
		    	Ext.ux.widgets.DataView.superclass.setStore.apply(this, arguments);
		    	
		    	this.store.relayEvents(this,['capacity']);
		    },
		    
		    
		    doLayout : function (shallow) {
		    	Ext.ux.widgets.DataView.superclass.doLayout.call(this, shallow);
		    	
		    	if (!this.items.getCount()) {
                    var empty_target = this.getLayout().innerCt || this.el;
                    var empty = empty_target.child('.empty_text');
                    if (empty) empty.center(empty_target);
		    	}
		    },
			
			
			bufferRender : function(records, startIndex){
		        var div = document.createElement('div');
				
		        var jemplateData = {
                    records: this.collectData(records, startIndex),
                    jemplate: this.jemplate
                };
                Ext.apply(jemplateData, this.jemplateData);
		        
				(this.jemplateInstance || Jemplate).process('Ext.ux.widgets.DataView.datasource', jemplateData, div);
				
		        return Ext.query(this.itemSelector, div);
		    },
		    
		    // private
		    onAdd : function(ds, records, index){
		        if(this.all.getCount() == 0){
		            this.refresh();
		            return;
		        }
		        var nodes = this.bufferRender(records, index), n, a = this.all.elements;
		        if(index < this.all.getCount()){
		            n = this.all.item(index).insertSibling(nodes, 'before', true);
		            this.all.insertElements(index, nodes);
		        }else{
		            n = this.all.last().insertSibling(nodes, 'after', true);
		            this.all.addElements(nodes);
		        }
		        this.updateIndexes(index);
		    },
		    
		    onNewThumbnail : function (container, component, index) {
		    	if (this.backgroundClass) {
		    		
		    		var background = new Ext.ux.element.Background({ 
		    			markupClass : this.backgroundClass,
				        adjustedLeft : this.backgroundAdjustments.left,
				        adjustedTop : this.backgroundAdjustments.top,
				        adjustedWidth : this.backgroundAdjustments.width,
				        adjustedHeight : this.backgroundAdjustments.height
		    			
		    		});
		    		
		    		if (!component.layout) {
		                component.layout = new Ext.layout.ContainerLayout(component.layoutConfig);
		                component.setLayout(component.layout);
		    		}
		    		background.init(component);
		    	}
		    }
		    
			
        }); //eof extend

		Ext.reg('uxdataview',Ext.ux.widgets.DataView);
		
		
/*jmpl:Ext.ux.widgets.DataView.datasource
[% 
	FOREACH rec IN records;
		import(rec);
		INCLUDE $jemplate;
	END;
%]
 jmpl*/
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:d5e8edef019f717f983593cce5813810
Jemplate.templateMap['Ext.ux.widgets.DataView.datasource']=function(context){if(!context)throw('Jemplate function called without context\n');var stash=context.stash;var output='';try{output+='\n';(function(){var list=stash.get('records');list=new Jemplate.Iterator(list);var retval=list.get_first();var value=retval[0];var done=retval[1];var oldloop;try{oldloop=stash.get('loop')}finally{}
stash.set('loop',list);try{while(!done){stash.data['rec']=value;output+=stash.get(['import',[stash.get('rec')]]);output+=context.include(stash.get('jemplate'));;retval=list.get_next();value=retval[0];done=retval[1];}}
catch(e){throw(context.set_error(e,output));}
stash.set('loop',oldloop);})();output+='\n ';}
catch(e){var error=context.set_error(e,output);throw(error);}
return output;}
// CREATED BY JEMPLATE COMPILER, DO NOT MODIFY CONTENT OF THIS SECTION! md5hex:d5e8edef019f717f983593cce5813810


		Ext.ux.widgets.DataView.CompositeElementLiteProxy = Ext.extend(Ext.CompositeElementLite, {
			addToCt : undefined,
			
			constructor : function (els, addToCt) {
				Ext.ux.widgets.DataView.CompositeElementLiteProxy.superclass.constructor.call(this, els);
				
				this.addToCt = addToCt;
			},
			
		    addElements : function(els){
		        if(els){
		            if(Ext.isArray(els)){
		                for (var i = 0; i < els.length; i++) {
		                	var item = new this.addToCt.itemClass({ applyTo : els[i] });
		                	this.addToCt.getEl().appendChild(els[i]);
		                	this.addToCt.add(item);
		                }
		                
		                Ext.ux.widgets.DataView.CompositeElementLiteProxy.superclass.addElements.apply(this, arguments);
		            }
		        }
		        return this;
		    },
			
		    insertElements : function(index, els){
		        if(els){
		            if(Ext.isArray(els)){
		                for (var i = 0; i < els.length; i++) {
		                	var item = new Ext.Container({ applyTo : els[i] });
		                	this.addToCt.getEl().appendChild(els[i]);
		                	this.addToCt.insert(index, item);
		                	this.elements.splice(index, 0, els[i]);
		                	index++;
		                }
		            }
		        }
		        return this;
		    },

		    
		    clear : function(){
		        var count = this.addToCt.items.getCount();
		        for (var i = 0; i < count; i++) this.addToCt.remove(this.addToCt.items.itemAt(0));
		        Ext.ux.widgets.DataView.CompositeElementLiteProxy.superclass.clear.apply(this, arguments);
		    },
		    
		    removeElement : function(el, removeDom){
		        if(Ext.isArray(el)){
		            for(var i = 0, len = el.length; i < len; i++){
		                this.removeElement(el[i]);
		            }
		            return this;
		        }
		        var index = typeof el == 'number' ? el : this.indexOf(el);
		        if(index !== -1 && this.elements[index]){
		            if(removeDom){
		                this.addToCt.remove(this.addToCt.items.itemAt(index));
		            }
		            
		            this.elements.splice(index, 1);
		        }
		        return this;
		    },

		    replaceElement : function(el, replacement, domReplace){
		        var index = typeof el == 'number' ? el : this.indexOf(el);
		        if(index !== -1){
		            replacement = Ext.getDom(replacement);
		            if(domReplace){
		                this.addToCt.remove(this.addToCt.items.itemAt(index));
		                
	                	var item = new Ext.Container({ applyTo : replacement });
	                	this.addToCt.getEl().appendChild(replacement);
	                	this.addToCt.insert(index, item);
		            }
		            this.elements.splice(index, 1, replacement);
		        }
		        return this;
		    }
		    
		    
		});

    }); //eof use

}); //eof declare