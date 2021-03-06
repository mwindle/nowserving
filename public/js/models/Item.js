define([
    'localStorage',
    'backbone-relational',
    'models/Comment'
  ], function() {
	
	var Item = Backbone.Model.extend({

		localStorage: new Backbone.LocalStorage("nowserving_items"),

		relations: [{
			type: "HasMany",
			key: "comments",
			relatedModel: "Comment",
			reversRelation: {
				key: "item"
			}
		}],
		
	    defaults:{
	        queueId: "default",
	        name: "",
	        phone: "",
	        email: "",
	        notes: "",
	        served: false
	    },
	    
	    toggleServed: function(){
	    	this.save({served: !this.get("served")});
	    }
	 
	});
	
	
	var Items = Backbone.Collection.extend({
		model : Item,

		localStorage: new Backbone.LocalStorage("nowserving_items"),
		
		served: function(){
			return this.where({served: true});
		},
		
		waiting: function(){
			return this.without.apply(this, this.served());
		}
		
	});
	
	return {
		Model: Item,
		Collection: Items
	};
	
});