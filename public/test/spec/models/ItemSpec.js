
define(['models/Item'], function(Item) {
	describe("Item Model", function() {
		/*
		TODO: Once our models are properly tied to a REST server, need to have fake server tests
		var server;
		
		beforeEach(function() {
			this.server = sinon.fakeServer.create();
		});
	    
		afterEach(function() {
			this.server.restore();
		});
		*/
		
		var item = new Item.Model();
	
		it("should have a default empty string name", function() {
			expect(item.get('name')).toBe("");
		});
		it("should have a default empty string phone", function() {
			expect(item.get('phone')).toBe("");
		});
		it("should have a default empty string email", function() {
			expect(item.get('email')).toBe("");
		});
		it("should have a default empty string notes", function() {
			expect(item.get('notes')).toBe("");
		});
		it("should have a default of not served", function() {
			expect(item.get('served')).toBe(false);
		});
		it("should be served when toggled from not served", function() {
			item.toggleServed();
			expect(item.get('served')).toBe(true);
		});
		
		//TODO: add tests for invalid data
		
	});
	
	describe("Item Collection", function() {

		var servedItem = new Item.Model({name:"Bob", phone:"+1 (222) 333-4444", email:"bob@example.com",notes:"this is a note",served:true});
		var unservedItem = new Item.Model({name:"Joe", phone:"+1 (333) 444-5555", email:"joe@example.com",notes:"this is another note"});
		var items = new Item.Collection();
		items.add(servedItem);
		items.add(unservedItem);
		
		it("should have 1 item waiting to be served", function() {
			expect(items.waiting().length).toBe(1);
		});
		
		it("should have 1 item already served", function() {
			expect(items.served().length).toBe(1);
		});
		
		it("should update already served to 2 after marking the waiting one served", function() {
			unservedItem.toggleServed();
			expect(items.served().length).toBe(2);
		});
		
		it("should update waiting to be served to 0 after marking the waiting one served", function() {
			expect(items.waiting().length).toBe(0);
		});

	});
});
