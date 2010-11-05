declare( 'Ext::ux::toolbar::Paged', function (use,checkState,__PACKAGE__) {
	
	use('Ext::ux::widgets::Button', function (){
		
		Ext.ux.toolbar.Paged = Ext.extend(Ext.Toolbar, {
	
//		    height : 50,
		    
		    addHandler : undefined,
		    addScope : undefined,
		    
		    addText 	: I18n.actionToolBar.add,
		    firstText 	: I18n.actionToolBar.first,
		    prevText 	: I18n.actionToolBar.prev,
		    nextText 	: I18n.actionToolBar.next,
		    lastText 	: I18n.actionToolBar.last,
		    refreshText : I18n.actionToolBar.refresh,
		    
		    translateTo : undefined,
		    
		    cls : 'x-big-toolbar',
		    
		    constructor : function (config) {
		    	Ext.ux.toolbar.Paged.superclass.constructor.call(this, config);
		    },
		    
		    initComponent : function(){
		        Ext.ux.toolbar.Paged.superclass.initComponent.call(this);
		        
		        this.addEvents('nextpage','prevpage','refresh');
		        
		        this.subscribe('languageChanged', this.onLanguageChanged, this);
		    },
		    
		    
		    onLanguageChanged : function (){
		    	if (this.translateTo && this.translateTo.pager) this.translateTo.pager.firePageState();
		    },
		
		    // private
		    afterRender : function(){
		        Ext.ux.toolbar.Paged.superclass.afterRender.call(this);
		        
		        this.setTranslateTo(this.translateTo);
		        
		        this.displayEl = Ext.fly(this.el.dom).createChild( { cls : 'x-paging-info' } );
		        
		        if (this.addHandler) {
			        this.add = this.addButton(new Ext.ux.widgets.myToolBarButton({
			            cls : 'x-mybutton',
			            iconCls : 'x-icon-add',
			            
			            text : this.addText,			            
			            tooltip: this.addText,
			            I18n : 'I18n.actionToolBar.add',
			            
			            handler: this.addHandler,
			            scope : this.addScope
			        }));
		        }

		        this.first = this.addButton(new Ext.ux.widgets.myToolBarButton({
		            cls : 'x-mybutton',
		            iconCls: "x-icon-firstpage",
		            
		            text : this.firstText,
		            tooltip: this.firstText,
		            I18n : 'I18n.actionToolBar.first',
		            
		            disabled: true,
		            handler: this.onClick.createDelegate(this, ["first"])
		        }));
		        
		        this.prev = this.addButton(new Ext.ux.widgets.myToolBarButton({
		            cls : 'x-mybutton',
		            iconCls: "x-icon-prevpage",
		            
		            text: this.prevText,
		            tooltip: this.prevText,
		            I18n : 'I18n.actionToolBar.prev',
		            
		            disabled: true,
		            handler: this.onClick.createDelegate(this, ["prev"])
		        }));
		        
		        this.addSeparator();
		        
		        //this.add(this.beforePageText);
		        //this.field = Ext.get(this.addDom({
		        //   tag: "input",
		        //   type: "text",
		        //   size: "3",
		        //   value: "1",
		        //   cls: "x-tbar-page-number"
		        //}).el);
		        //this.field.on("keydown", this.onPagingKeydown, this);
		        //this.field.on("focus", function(){this.dom.select();});
		        //this.afterTextEl = this.addText(String.format(this.afterPageText, 1));
		        //this.field.setHeight(18);
		        //this.addSeparator();
		        
		        this.next = this.addButton(new Ext.ux.widgets.myToolBarButton({
		            cls : 'x-mybutton',
		            iconCls: "x-icon-nextpage",
		            
		            tooltip: this.nextText,
		            text: this.nextText,
		            I18n : 'I18n.actionToolBar.next',
		            
		            disabled: true,
		            handler: this.onClick.createDelegate(this, ["next"])
		        }));
		        
		        this.last = this.addButton(new Ext.ux.widgets.myToolBarButton({
		            cls : 'x-mybutton',
		            iconCls: "x-icon-lastpage",
		            
		            tooltip: this.lastText,		            
		            text: this.lastText,
		            I18n : 'I18n.actionToolBar.last',
		            
		            disabled: true,
		            
		            handler: this.onClick.createDelegate(this, ["last"])
		        }));
		        
		        this.addSeparator();
		        
		        
		        if (this.refreshText) this.refreshButton = this.addButton(new Ext.ux.widgets.myToolBarButton({
		            cls : 'x-mybutton',
		            iconCls : 'x-icon-refresh',
		            
		            text : this.refreshText,
		            tooltip: this.refreshText,
		            I18n : 'I18n.actionToolBar.refresh',
		            
		            handler: this.onClick.createDelegate(this, ["refresh"])
		        }));
		        
		        ////if(this.displayInfo){
		        //    this.displayEl = Ext.fly(this.el.dom).createChild({cls:'x-paging-info'});
		        ////}
		        //if(this.dsLoaded){
		        //    this.onLoad.apply(this, this.dsLoaded);
		        //}
		        
		        if (this.translateTo.pager) this.translateTo.pager.firePageState();
		    },
		    
		    setTranslateTo : function (receiver) {
		    	if (receiver) {
		        	receiver.on('pagestate',this.onPageState,this);
		        	
		        	this.translateTo = receiver;
		        }
		    },
		
		    // private
		    onPageState : function(pagestate){
				if (this.prev) {
					this.prev.setDisabled(!pagestate.canPrev);
			        this.next.setDisabled(!pagestate.canNext);
					if (this.refreshButton) this.refreshButton.setDisabled(!pagestate.totalElements);
			        
			        if(this.displayEl){
			            this.displayEl.update(pagestate.standartMsg);
			        }
				}
		    },
		
		    // private
		    //onLoad : function(store, r, o){
		    //    if(!this.rendered){
		    //        this.dsLoaded = [store, r, o];
		    //        return;
		    //    }
		    //   this.cursor = o.params ? o.params[this.paramNames.start] : 0;
		    //   var d = this.getPageData(), ap = d.activePage, ps = d.pages;
		    //
		    //   this.afterTextEl.el.innerHTML = String.format(this.afterPageText, d.pages);
		    //   this.field.dom.value = ap;
		    //   this.first.setDisabled(ap == 1);
		    //   this.prev.setDisabled(ap == 1);
		    //   this.next.setDisabled(ap == ps);
		    //   this.last.setDisabled(ap == ps);
		    //   this.refreshButton.enable();
		    //   this.updateInfo();
		    //},
		    //
		    //// private
		    //getPageData : function(){
		    //    var total = this.store.getTotalCount();
		    //    return {
		    //        total : total,
		    //        activePage : Math.ceil((this.cursor+this.pageSize)/this.pageSize),
		    //        pages :  total < this.pageSize ? 1 : Math.ceil(total/this.pageSize)
		    //    };
		    //},
		    //
		    //// private
		    //onLoadError : function(){
		    //    if(!this.rendered){
		    //        return;
		    //    }
		    //    this.refreshButton.enable();
		    //},
		    //
		    //readPage : function(d){
		    //    var v = this.field.dom.value, pageNum;
		    //    if (!v || isNaN(pageNum = parseInt(v, 10))) {
		    //        this.field.dom.value = d.activePage;
		    //        return false;
		    //    }
		    //    return pageNum;
		    //},
		    //
		    //// private
		    //onPagingKeydown : function(e){
		    //    var k = e.getKey(), d = this.getPageData(), pageNum;
		    //    if (k == e.RETURN) {
		    //        e.stopEvent();
		    //        if(pageNum = this.readPage(d)){
		    //            pageNum = Math.min(Math.max(1, pageNum), d.pages) - 1;
		    //            this.doLoad(pageNum * this.pageSize);
		    //        }
		    //    }else if (k == e.HOME || k == e.END){
		    //        e.stopEvent();
		    //        pageNum = k == e.HOME ? 1 : d.pages;
		    //        this.field.dom.value = pageNum;
		    //    }else if (k == e.UP || k == e.PAGEUP || k == e.DOWN || k == e.PAGEDOWN){
		    //        e.stopEvent();
		    //        if(pageNum = this.readPage(d)){
		    //            var increment = e.shiftKey ? 10 : 1;
		    //            if(k == e.DOWN || k == e.PAGEDOWN){
		    //                increment *= -1;
		    //            }
		    //            pageNum += increment;
		    //            if(pageNum >= 1 & pageNum <= d.pages){
		    //                this.field.dom.value = pageNum;
		    //            }
		    //        }
		    //    }
		    //},
		    //
		    //// private
		    //beforeLoad : function(){
		    //    if(this.rendered && this.refreshButton){
		    //        this.refreshButton.disable();
		    //    }
		    //},
		    //
		    //doLoad : function(start){
		    //    var o = {}, pn = this.paramNames;
		    //    o[pn.start] = start;
		    //    o[pn.limit] = this.pageSize;
		    //    this.store.load({params:o});
		    //},
		
		    // private
		    onClick : function(which){
		        switch(which){
		            case "first":
		                //this.doLoad(0);
		            break;
		            case "prev":
		                this.fireEvent('prevpage');
		                if (this.translateTo) this.translateTo.fireEvent('prevpage');
		            break;
		            case "next":
		                this.fireEvent('nextpage');
		                if (this.translateTo) this.translateTo.fireEvent('nextpage');
		            break;
		            case "last":
		                //var total = store.getTotalCount();
		                //var extra = total % this.pageSize;
		                //var lastStart = extra ? (total - extra) : total-this.pageSize;
		                //this.doLoad(lastStart);
		            break;
		            case "refresh":
						this.fireEvent('refresh');
		                if (this.translateTo) this.translateTo.fireEvent('refresh');
		            break;
		        }
		    }
		
		    
		});
		Ext.reg('pagedtoolbar', Ext.ux.toolbar.Paged);
	
	});
	
}); //eof use