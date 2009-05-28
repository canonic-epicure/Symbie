Ext.ux.ToastWindowMgr = {
    positions: []
};

Ext.ux.ToastWindow = Ext.extend(Ext.Window, {
    initComponent: function() {
        Ext.applyIf(this, {
            iconCls: this.iconCls || 'x-toast-information',
            width: 200,
            height: 100,
            autoScroll: true,
            autoDestroy: true,
            plain: false,
            anchor : 'br-br',
            hideDelay : 2000
        });
        this.task = new Ext.util.DelayedTask(this.hide, this);
        Ext.ux.ToastWindow.superclass.initComponent.call(this);
    },
    
    setMessage: function(msg){
        this.body.update(msg);
    },
    
    setTitle: function(title, iconCls){
        Ext.ux.ToastWindow.superclass.setTitle.call(this, title, iconCls||this.iconCls);
    },
    
    onRender:function(ct, position) {
        Ext.ux.ToastWindow.superclass.onRender.call(this, ct, position);
    },
    
    onDestroy: function(){
        Ext.ux.ToastWindowMgr.positions.remove(this.pos);
        Ext.ux.ToastWindow.superclass.onDestroy.call(this);
    },
    
    afterShow: function(){
        Ext.ux.ToastWindow.superclass.afterShow.call(this);
        this.on('move', function(){
            Ext.ux.ToastWindowMgr.positions.remove(this.pos);
            this.task.cancel();}
        , this);
        this.task.delay(this.hideDelay);
    },
    
    animShow: function(){
        this.pos = 0;
        while(Ext.ux.ToastWindowMgr.positions.indexOf(this.pos)>-1) this.pos++;
        Ext.ux.ToastWindowMgr.positions.push(this.pos);
        this.setSize(200,100);
        this.el.alignTo(document, this.anchor, [ -20, -20-((this.getSize().height+10)*this.pos) ]);
        this.el.slideIn('b', {
            duration: 1,
            callback: this.afterShow,
            scope: this
        });    
    },
    
    animHide: function(){
        Ext.ux.ToastWindowMgr.positions.remove(this.pos);
        this.el.ghost("b", {
            duration: 1,
            remove: true,
            scope: this,
            callback: this.destroy
        });    
    }
}); 

Ext.reg('toastwindow', Ext.ux.ToastWindow);