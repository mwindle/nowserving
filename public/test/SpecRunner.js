

require.config({
	baseUrl : "../js/",
	urlArgs : 'cb=' + Math.random(),
	paths: {
		jquery: 'lib/jquery/dist/jquery',
		underscore: 'lib/underscore/underscore',
	    backbone: 'lib/backbone/backbone',
		text: 'lib/requirejs-text/text',
	    localStorage: 'lib/backbone.localStorage/backbone.localStorage',
	    "backbone-relational": "lib/backbone-relational/backbone-relational"
	},
	shim: {
		underscore: {
			exports: "_"
		},
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	}
});

require(
		['jquery', '../test/index'],
		function($, index) {
			var jasmineEnv = jasmine.getEnv(), htmlReporter = new jasmine.HtmlReporter();

			jasmineEnv.addReporter(htmlReporter);

			jasmineEnv.specFilter = function(spec) {
				return htmlReporter.specFilter(spec);
			};

			$(function() {
				require(index.specs, function() {
					jasmineEnv.execute();
				});
			});
		});
