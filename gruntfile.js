module.exports = function(grunt) {

  grunt.initConfig({
    bake: {
      build: {
        options: {
        // Task-specific options go here.
        },
        files: {
          "dist/index.html": "src/html/master.html"
        }
      },
    },
  });

  grunt.loadNpmTasks("grunt-bake");
  // Default task(s).
  grunt.registerTask('default', ['bake']);

};



