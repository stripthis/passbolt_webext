module.exports = function(grunt) {

	var config = {
		addon_vendor: 'src/all/background/vendors'
	};

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			steal: {
				files: [
					{expand: true, cwd: 'node_modules/steal/', src: 'steal.js', dest: config.addon_vendor },
					{expand: true, cwd: 'node_modules/jquery/dist/', src: 'jquery.min.js', dest: config.addon_vendor }
				]
			}
		}
	});

	// Tasks
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Default task(s).
	grunt.registerTask('default', ['copy:steal']);

};