module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      main: {
        options: {
          cleancss: true
        },
        files: [{
          expand: true,
          src: ['formatting/*.less', 'style/*.less'],
          dest: 'css/',
          ext: '.css'
        }]
      }      
    },
    babel: {
      compile: {
        options: {
          sourceMap: true,
          presets: ['es2015']
        },
        files: {
          'js/main.es6.js': 'js/main.js'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.loadNpmTasks('grunt-babel');

  // Default task(s).
  grunt.registerTask('default', ['less', 'babel']);

};