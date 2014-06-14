
define([
    'backbone',
    'models/Item',
    'views/ItemView'
  ], function(Backbone, Item, ItemView) {
	
	describe("ItemView", function() {
	  
	  beforeEach(function() {
		this.renderSpy = sinon.spy(ItemView.prototype, "render");
		this.removeSpy = sinon.spy(ItemView.prototype, "remove");
		var item = new Item.Model({name:"Bob", phone:"+1 (222) 333-4444", email:"bob@example.com",notes:"this is a note",served:true});
	    this.view = new ItemView({model: item});
	  });
	  
	  afterEach(function() {
		 this.renderSpy.restore();
		 this.removeSpy.restore();
	  });
	  
	  describe("Instantiation", function() {
	 
	    it("should create a list item", function() {
	      expect(this.view.el.nodeName).toEqual("LI");
	    });
	    
	    it("should have a class of 'item'", function() {
	    	expect(this.view.$el.hasClass('item')).toBeTruthy();
	    });
	    
	  });
	  
	  describe("Rendering", function(){
		 
		  it("should return the view on render", function(){
			 expect(this.view.render()).toEqual(this.view); 
		  });
		  
		  it("should have a class of served when it's served", function() {
			 expect(this.view.$el.hasClass('served')).toBeTruthy(); 
		  });
		  
		  it("should not have a class of served when it's waiting", function() {
			 this.view.model.toggleServed();
			 expect(this.view.$el.hasClass('served')).toBeFalsy(); 
		  });
		  
		  it("should render the name attribute", function(){
			 expect(this.view.render().$el.has('.item_name').length).toEqual(1);
		  });
		  
		  it("should render the phone attribute", function(){
			 expect(this.view.render().$el.has('.item_phone').length).toEqual(1);
		  });
		  
		  it("should render the email attribute", function(){
			 expect(this.view.render().$el.has('.item_email').length).toEqual(1);
		  });
		  
		  it("should render the notes attribute", function(){
			 expect(this.view.render().$el.has('.item_notes').length).toEqual(1);
		  });
		  
		  it("should render the editable name input", function(){
			 expect(this.view.render().$el.has('.edit_name').length).toEqual(1);
		  });
		  
		  it("should render the editable phone input", function(){
			 expect(this.view.render().$el.has('.edit_phone').length).toEqual(1);
		  });
		  
		  it("should render the editable email input", function(){
			 expect(this.view.render().$el.has('.edit_email').length).toEqual(1);
		  });
		  
		  it("should render the editable notes input", function(){
			 expect(this.view.render().$el.has('.edit_notes').length).toEqual(1);
		  });
		    
	      it("should render once anytime the model changes", function(){
	    	 this.view.model.set("notes", "this is an updated note");
	    	 expect(this.renderSpy.calledTwice).toBeTruthy();
	      });
		    
	      it("should be removed when the model is destroyed", function(){
	    	 this.view.model.destroy();
	    	 expect(this.removeSpy.calledOnce).toBeTruthy();
	      });
		  	  
	  });
	  
	});
	
});

