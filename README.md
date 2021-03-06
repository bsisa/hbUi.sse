
hbUi.sse
=====

HyperBird AngularJS module for Server Sent Events support.


# Building the distribution #


## Prerequisites tools ##

* Grunt - JavaScript Task Runner - http://gruntjs.com/
* Bower - Package manager for the web by Twitter - http://bower.io/
* Both of which relies on Node.js - http://nodejs.org/


### Prerequisite tools installation ###


#### Node.js installation ####

Please follow install instructions at http://nodejs.org/


#### Grunt installation ####

Example installation procedure tested on Ubuntu Linux 12.04, 
for other environment please refer to install instructions 
provided on the tools web sites.
_Note the -g or --global option causes npm to install the package globally rather than locally._

    sudo npm install -g grunt
    sudo npm install -g grunt-cli

Additional project dependencies require installing further grunt plugins in local:

	npm install grunt-contrib-clean
	npm install grunt-contrib-concat
	npm install grunt-contrib-uglify
	npm install grunt-contrib-cssmin
	npm install grunt-html2js
	npm install grunt-karma


#### Bower installation ####

    sudo npm install -g bower

##### Usage #####

Go to /hb-ui/main/ directory where bower.json file is located and type:

    bower install

This will deploy what is specified in bower.json 


## Build procedure ##

Go to /hb-ui/main/ directory where Gruntfile.js file is located and type:

    grunt

This should output something like: 		

    Running "concat:dist" (concat) task
    
    Running "uglify:build" (uglify) task
    File dist/hbUi.sse-0.0.1.min.js created: 1.83 kB → 910 B
    >> 1 file created.
    
    Running "cssmin:combine" (cssmin) task
    >> 1 file created. 0 B → 0 B
    	
    Running "cssmin:minify" (cssmin) task
    >> 1 file created. 0 B → 0 B
    
    Done.


Other useful grunt tasks are: 

    grunt karma:unit
    grunt karma:ci


