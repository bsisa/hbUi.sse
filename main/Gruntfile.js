// 
// Check: https://github.com/karma-runner/grunt-karma 
// for configurations related to karma.
//
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ["target/**/*"],

        // Configure tests using karma
        karma: {
            unit: {
        		configFile: 'karma.conf.js',            	
            	//run karma in the background
//            	background: true
            },
        	// Continuous Integration tests once in PhantomJS browser.
        	ci: {
        		configFile: 'karma.conf.js',        		
        		singleRun: true,
        		browsers: ['PhantomJS']
        	},
        	dev: {
        		configFile: 'karma.conf.js',        		
        		singleRun: true
        	},
        },

        concat: {
            options: {
                separator: ''
            },
            dist: {
            	src : [         
			'src/main/js/hbUiSseModule.js',
			'src/main/js/hbUiSseOfflineService.js',
		],
                dest: 'target/dist/<%= pkg.name %>-<%= pkg.version %>.js'
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> Copyright 2016 Patrick Refondini. Licensed under the Apache License, Version 2.0 */\n'
            },
            build: {
                src: 'target/dist/<%= pkg.name %>-<%= pkg.version %>.js',
                dest: 'target/dist/<%= pkg.name %>-<%= pkg.version %>.min.js'
            }
        },

        cssmin: {
            combine: {
                files: {
                    'target/dist/<%= pkg.name %>-<%= pkg.version %>.css': ['css/hb5.css']
                }
            },

            minify: {
                expand: true,
                cwd: 'target/dist/',
                src: ['<%= pkg.name %>-<%= pkg.version %>.css'],
                dest: 'target/dist/',
                ext: '.min.css'
            }
        }

    });

    // Load plugins providing custom tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-karma');

    // Default task(s): clean up every temporary files (distribution, test reports,...), 
    // re-builds the distribution and tests in a single run with all defined browsers (see karma.conf.js)
    grunt.registerTask('default', ['clean', 'concat:dist', 'uglify', 'cssmin' ]);
    grunt.registerTask('dist', ['clean', 'concat:dist', 'uglify', 'cssmin', 'karma:dev' ]);

};
