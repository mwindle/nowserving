module.exports = function(grunt) {
	grunt.initConfig({
		
		requirejs : {
			compile : {
				options : {
					baseUrl : "public/js/",
					paths : {
						jquery : 'lib/jquery/dist/jquery',
						underscore : 'lib/underscore/underscore',
						backbone : 'lib/backbone/backbone',
						localStorage : 'lib/backbone.localStorage/backbone.localStorage',
						bootstrap : 'lib/bootstrap/dist/js/bootstrap'
					},
					shim : {
						underscore : {
							exports : "_"
						},
						backbone : {
							deps : [ 'underscore', 'jquery' ],
							exports : 'Backbone'
						},
						'backbone.localStorage' : {
							deps : [ 'backbone' ],
							exports : 'Backbone'
						}
					},
					name : "app.js",
					out : "public/js/build/app.built.js"
				}
			}
		}
	});

	grunt.registerTask('heroku', ['requirejs']);
	
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.registerTask('default', ['requirejs']);
};
