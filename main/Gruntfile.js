module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        karma: {
            unit: {
                configFile: 'test/karma-unit.js',
                // run karma in the background
                background: true,
                // which browsers to run the tests on
                browsers: ['Chrome', 'Firefox']
            }
        },

        concat: {
            options: {
                separator: ''
            },
            dist: {
            	src : [         
			'src/hbUiSseModule.js',
			'src/hbUiSseOfflineService.js',
		],
                dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.js'
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> Copyright 2016 Patrick Refondini. Licensed under the Apache License, Version 2.0 */\n'
            },
            build: {
                src: 'dist/<%= pkg.name %>-<%= pkg.version %>.js',
                dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.min.js'
            }
        },

        cssmin: {
            combine: {
                files: {
                    'dist/<%= pkg.name %>-<%= pkg.version %>.css': ['css/hb5.css']
                }
            },

            minify: {
                expand: true,
                cwd: 'dist/',
                src: ['<%= pkg.name %>-<%= pkg.version %>.css'],
                dest: 'dist/',
                ext: '.min.css'
            }
        }

    });

    // Load the plugin that provides the "concat" and "uglify" tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-karma');

    // Default task(s).
    grunt.registerTask('default', ['concat:dist', 'uglify', 'cssmin' ]);

};