declare('SymbieOrg::custom::HorizontalStrip', function (use, checkState, __PACKAGE__){

	use(['Ext::ux::layout::ColumnFit', 'Ext::ux::layout::Slide'], function () {
		
		SymbieOrg.custom.HorizontalStrip = Ext.extend(Ext.Container, {
			
			centralConfig : undefined,
			slots : true,
			
			constructor : function (config){
				
				config.centralConfig.columnWidth = 1;
				config.centralConfig.slot = 'center';
				
				Ext.apply(config, {
					autoEl : 'div',
					layout : 'columnfit',
					cls : 'x-horizontal-strip',
					
					items : [
						{
							xtype : 'container',
							autoEl : 'div',
							slot : 'left',
							
							width : 51,
							cls : 'x-horizontal-strip-wrapper',
							
							items : [
								{
									xtype : 'container',
									autoEl : 'div',
									slot : 'scroll_left',
									
									cls : 'x-horizontal-strip-scroll-left x-horizontal-strip-scroller',
									overCls : 'x-horizontal-strip-scroll-left-active'
								}
							]
						},
						//central column
						config.centralConfig,
						//eof central column
						{
							xtype : 'container',
							autoEl : 'div',
							slot : 'right',
							
							width : 51,
							cls : 'x-horizontal-strip-wrapper',
							
							items : [
								{
									xtype : 'container',
									autoEl : 'div',
									
									slot : 'scroll_right',
									cls : 'x-horizontal-strip-scroll-right x-horizontal-strip-scroller',
									overCls : 'x-horizontal-strip-scroll-right-active'
								}
							]
						}
					]
				});
				
				SymbieOrg.custom.HorizontalStrip.superclass.constructor.call(this, config);
			},
			
			
			initComponent : function (){
				SymbieOrg.custom.HorizontalStrip.superclass.initComponent.call(this);
				
				this.on('afterlayout', this.centerScrollers, this);
				this.on('afterlayout', this.setupButtons, this, { single : true });
				
				this.slots.center.addEvents('activeitemchanged');
				this.slots.center.on('activeitemchanged', this.setupButtons, this);
				
				this.slots.scroll_left.on('render', function () {
					
					this.slots.scroll_left.el.on('click', function () {
						this.switchTab(-1);
					}, this);
					
				}, this, { single : true });

				
				this.slots.scroll_right.on('render', function () {
					
					this.slots.scroll_right.el.on('click', function () {
						this.switchTab(1);
					}, this);
					
				}, this, { single : true });
			},
			
			
			centerScrollers : function () {
				if (!this.slots.scroll_left.rendered || !this.slots.scroll_right.rendered) return;
				
				this.slots.scroll_left.el.applyStyles({
					top : (Math.round( this.el.getHeight() / 2 ) - 16) + 'px'
				});
				this.slots.scroll_right.el.applyStyles({
					top : (Math.round( this.el.getHeight() / 2 ) - 16) + 'px'
				});
			},
			
			
			setupButtons : function () {
				var cards = this.slots.center;
				
				var layout = cards.getLayout();
				
				if (layout instanceof Ext.ux.layout.Slide) {
					var currentIndex = layout.activeItemNo;
				} else {
					var currentIndex = cards.items.indexOf(layout.activeItem);
				}
				
				if (currentIndex == 0) {
					this.slots.scroll_left.addClass('x-horizontal-strip-scroll-left-disabled');
				} else {
					this.slots.scroll_left.removeClass('x-horizontal-strip-scroll-left-disabled');
				}
				
				if (currentIndex == cards.items.getCount() - 1) {
					this.slots.scroll_right.addClass('x-horizontal-strip-scroll-right-disabled');
				} else {
					this.slots.scroll_right.removeClass('x-horizontal-strip-scroll-right-disabled');
				}
			},
			
			
			switchTab : function (delta) {
				var cards = this.slots.center;
				
				var layout = cards.getLayout();
				
				if (layout instanceof Ext.ux.layout.Slide) {
					var currentIndex = layout.activeItemNo;
				} else {
					var currentIndex = cards.items.indexOf(layout.activeItem);
				}
				
				
				currentIndex += delta;
				if (currentIndex >= 0 && currentIndex < cards.items.getCount()) {
					if (cards instanceof Ext.TabPanel) {
						cards.setActiveTab(cards.items.itemAt(currentIndex));
					} else {
						layout.setActiveItem(currentIndex);
					}
				}
				
				if (!(layout instanceof Ext.ux.layout.Slide)) this.setupButtons();
			}
			
			
		}); //eof extend
		
		
		Ext.reg('horizontalstrip', SymbieOrg.custom.HorizontalStrip);
		
	}); //eof use
	
}); //eof declare