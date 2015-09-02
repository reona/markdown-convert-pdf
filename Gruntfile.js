module.exports = function (grunt) {

     grunt.initConfig({
          pkg: grunt.file.readJSON('package.json'),
          markdownpdf: {
               files: {
                    src: 'src/*.md',
                    dest: 'pdf/'
               }
          }
     });

     grunt.loadNpmTasks('grunt-markdown-pdf');
     grunt.registerTask('pdf', 'markdownpdf');
};
