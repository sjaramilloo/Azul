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
          {
            src: "./src/pages/tienda.html",
            dest: "./dist/tienda.html",
          },
          {
            src: "./src/pages/contactenos.html",
            dest: "./dist/contactenos.html",
          },
        ],
        templateData: "./src/pages/data.json",
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
        html: ["dist/**/*.html"],
        css: ["dist/**/*.css"],
        js: ["dist/**/*.js"]
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
        },
        cname: {
          expand: true,
          src: 'CNAME',
          dest: 'dist/',
        }
      },
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: "src/**/*.scss",
        tasks: ["clean:css", "sass"],
        options: {
          livereload: false
        }
      },
      handlebars: {
        files: "src/**/*.html",
        tasks: ["clean:html", "compile-handlebars"],
        options: {
          livereload: false
        }
      },
      js: {
        files:"src/**/*.js",
        tasks: ["clean:js", "copy:js"],
        options: {
          livereload: false
        }
      },
      dist: {
        files: ["dist/**/*.js", "dist/**/*.css", "dist/**/*.html"]
      }
    },
    connect: {
      server: {
        options: {
          port: 8001,
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
