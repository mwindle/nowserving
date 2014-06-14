module.exports = function(grunt) {
	grunt.initConfig({
		connect : {
			test : {
				port : 8000,
				middleware : function(connect) {
					return [ mountFolder(connect, 'public') ];
				}
			}
		},
	
		watch : {
			files : [ 'test/**/*.js', 'public/js/**/*.js', 'public/nowserving.html', 'public/views/**/*.html'],
			tasks : ['requirejs']
		},
	
		exec : {
			jasmine : {
				command : './node_modules/phantomjs/bin/phantomjs ./public/test/lib/run-jasmine.js http://localhost:5000/test',
				stdout : true
			}
		},
		
		requirejs : {
			compile : {
				options : {
					baseUrl : "public/js/",
					paths : {
						jquery : 'lib/jquery/dist/jquery',
						underscore : 'lib/underscore/underscore',
						backbone : 'lib/backbone/backbone',
						text: 'lib/requirejs-text/text',
						localStorage : 'lib/backbone.localStorage/backbone.localStorage',
					    "backbone-relational": "lib/backbone-relational/backbone-relational",
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
						},
						'backbone-relational': {
							deps: ['backbone'],
							exports: 'Backbone'
						}
					},
					name : "app.js",
					out : "public/js/build/app.built.js"
				}
			}
		}
	});

	grunt.registerTask('heroku', ['requirejs']);

	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.registerTask('default', ['requirejs', 'exec:jasmine', 'watch']);
};
