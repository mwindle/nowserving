
require.config({	
	baseUrl: "js/",
	paths: {
		jquery: 'lib/jquery/dist/jquery',
		underscore: 'lib/underscore/underscore',
	    backbone: 'lib/backbone/backbone',
		text: 'lib/requirejs-text/text',
	    localStorage: 'lib/backbone.localStorage/backbone.localStorage',
	    "backbone-relational": "lib/backbone-relational/backbone-relational",
	    bootstrap: 'lib/bootstrap/dist/js/bootstrap'
	},
	shim: {
		underscore: {
			exports: "_"
		},
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'backbone.localStorage': {
			deps: ['backbone'],
			exports: 'Backbone'
		},
		'backbone-relational': {
			deps: ['backbone'],
			exports: 'Backbone'
		}
	}
});

require([
 		'jquery',
 		'backbone',
 		'views/NowServingAppView',
		'bootstrap'
 	], function($, Backbone, NowServingAppView) {
	
	var Router = Backbone.Router.extend({
		
		routes: {
			"": "main"
		},
		
		main: function(){
			new NowServingAppView();
		}

	});
	
	new Router();
	Backbone.history.start();
	
 });