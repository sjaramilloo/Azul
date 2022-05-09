module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"), 
        'compile-handlebars': {
            allStatic:{
                files:[{
                    src: './src/pages/azul.html',
                    dest: './dist/azul.html'
                }], 
                templateData: './src/pages/profesionales.json',
            }
        }
    });
    grunt.loadNpmTasks('grunt-compile-handlebars');
    grunt.registerTask('default',['compile-handlebars']);
};