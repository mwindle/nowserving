define([
    'backbone',
    'models/Item'
  ], function(Backbone, Item) {
	
	var ItemView = Backbone.View.extend({
		
		tagName : "li",
	
		template : _.template($("#item_template").html()),
	
		events : {
			"click .toggle_served": "toggleServed",
			"dblclick .view": "openEditing",
			"keyup .edit": "handleEditKeyUp",
			"click .notify": "notify",
			"click .remove": "clear",
			"click .save": "saveChanges"
		},
	
		initialize : function() {
			_.bindAll(this, "toggleServed", "openEditing", "handleEditKeyUp", "notify", "clear", "saveChanges");
			this.listenTo(this.model, 'change', this.render);
		    this.listenTo(this.model, 'destroy', this.remove);
			this.render();
		},
	
		render : function() {
			this.$el.html(this.template(this.model.toJSON()));
			this.$el.toggleClass("served", this.model.get("served"));
			this.inputName = this.$('.edit_name');
			this.inputPhone = this.$('.edit_phone');
			this.inputEmail = this.$('.edit_email');
			this.inputNotes = this.$('.edit_notes');
			return this;
		},
	
		toggleServed : function() {
			this.model.toggleServed();
		},
		
		openEditing: function(){
			this.$el.addClass("editing");
			this.inputName.focus();
		},
		
		closeEditing: function(){
			this.$el.removeClass("editing");
		},
		
		handleEditKeyUp: function(e){
			if (e.keyCode == 13) { this.saveChanges(); }     // enter
			if (e.keyCode == 27) { this.cancelChanges(); }   // esc
		},
		
		saveChanges: function(){
			var itemMap = {
				name : this.inputName.val(),
				phone : this.inputPhone.val(),
				email : this.inputEmail.val(),
				notes : this.inputNotes.val()
			};
			this.model.save(itemMap);
			this.closeEditing();
		},
		
		cancelChanges: function(){
			this.closeEditing();
			this.render();
		},
		
		clear: function(){
			this.model.destroy();
		},
		
		notify: function(){
			//todo
			console.error("Notify not implemented");
		}
	});
	return ItemView;
});