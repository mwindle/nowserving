define([
    'localStorage',
    'backbone-relational'
  ], function() {
	
	var Comment = Backbone.RelationalModel.extend({
		
	    defaults:{
	        text: ""
	    }
	 
	});
	
	
	var Comments = Backbone.Collection.extend({
		model : Comment,
		
	});
	
	return {
		Model: Comment,
		Collection: Comments
	};
	
});