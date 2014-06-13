

define([
    'backbone',
    'models/Item',
    'views/ItemView'
  ], function(Backbone, Item, ItemView) {
	
	var NowServingAppView = Backbone.View.extend({
		
		el: "#nowserving_app",
		
		statsTemplate : _.template($("#stats_template").html()),
		
		events: {
			"keyup .add_item": "handleAddItemKeyUp",
			"click .add": "addItem"
		},
		
		initialize: function(){
			_.bindAll(this, "handleAddItemKeyUp", "addItem");
			
			this.items = new Item.Collection();
			this.listenTo(this.items, 'add', this.addOneItem);
			this.listenTo(this.items, 'reset', this.addAllItems);
			this.listenTo(this.items, 'all', this.render);
			
			this.main = this.$('#main');
			this.inputName = this.$('#add_name');
			this.inputPhone = this.$('#add_phone');
			this.inputEmail = this.$('#add_email');
			this.inputNotes = this.$('#add_notes');
			
			this.footer = this.$('#footer');
			
			this.items.fetch();
		},
		
		render: function(){
			if(this.items.length){
				
				this.main.show();
				
				this.footer.html(this.statsTemplate({waiting: this.items.waiting().length}));	
				this.footer.show();				
			} else {
				
				this.main.hide();
				
				this.footer.hide();			
			}
			return this;
		},
		
		addOneItem: function(item){
			console.log("addOneItem called with " + item);
			var view = new ItemView({model: item});
			this.$("#items").append(view.render().el);
		},
		
		addAllItems: function(){
			console.log("addAllItems called with " + this.items.length + " items");
			this.items.each(this.addOneItem, this);
		},
		
		handleAddItemKeyUp: function(e){
			if (e.keyCode == 13) { this.addItem(); }     			// enter
			if (e.keyCode == 27) { this.clearAddItemFields(); }   	// esc
		},
		
		addItem: function(){
			var itemMap = {
				name : this.inputName.val(),
				phone : this.inputPhone.val(),
				email : this.inputEmail.val(),
				notes : this.inputNotes.val()
			};
			this.items.create(itemMap);
			this.clearAddItemFields();
		},
		
		clearAddItemFields: function(){
			this.inputName.val('');
			this.inputPhone.val('');
			this.inputEmail.val('');
			this.inputNotes.val('');
		}
	});
	
	return NowServingAppView;
	
});
