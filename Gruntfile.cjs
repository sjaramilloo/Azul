module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    "compile-handlebars": {
      allStatic: {
        files: [
          {
            src: "./src/pages/index.html",
            dest: "./dist/index.html",
          },
        ],
        templateData: "./src/pages/profesionales.json",
      },
    },
    sass: {
      dist: {
        options: {
          style: "expanded"
        },
        files: {
          "dist/css/style.css": "src/css/style.scss",
        },
      },
    },
    clean: {
        all: ["dist"],
        html: ["dist/**.html"],
        css: ["dist/**.css"]
    },
    copy: {
        files: {
          expand: true,
          cwd: 'src/public',
          src: '**',
          dest: 'dist/',
        },
        js: {
            expand: true,
            cwd: 'src/js',
            src: '**',
            dest: 'dist/js',
        }
      },
    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: "src/**/*.scss",
        tasks: ["clean:css", "sass"],
      },
      handlebars: {
        files: "src/**/*.html",
        tasks: ["clean:html", "compile-handlebars"],
      },
    },
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: "*",
          directory: "./dist",
          base: "dist",
          livereload: true,
          open: true,
        },
      },
    },
  });
  grunt.loadNpmTasks("grunt-compile-handlebars");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.registerTask("default", [
    "clean",
    "compile-handlebars",
    "sass",
    "move",
    "connect",
    "watch",
  ]);
  grunt.registerTask("build", ["clean:all", "compile-handlebars", "sass", "copy"]);
  grunt.registerTask("dev", [
    "clean:all",
    "compile-handlebars",
    "sass",
    "copy",
    "connect",
    "watch",
  ]);
};
