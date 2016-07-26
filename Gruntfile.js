module.exports = (grunt) => {
  grunt.initConfig({
    eslint: {
      target: ['index.js', 'src/**/*.js'],
    },
  });

  grunt.loadNpmTasks('grunt-eslint');

  grunt.registerTask('default', ['eslint']);
};
