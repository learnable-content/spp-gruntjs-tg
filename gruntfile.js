module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            options: {
                port: 9000,
                //port on which we want our server to run
                base: 'public',
                //directory for our index.html file
                livereload: 35729
                    //set livereload port to 35729 to work with 'watch' task
            },
            start: {
                //we will use this 'start' target to run our server
                options: {
                    open: true,
                    //by setting this to true, the connect task will automatically open our browser to localhost:9000
                }
            }
        },
        watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                        //this enables livereload on port 9000
                },
                files: [
                    'public/index.html'
                ]
            },
        },
        uncss: {
            dist: {
                files: {
                    'dist/css/main.css': ['public/index.html', 'public/about.html']
                }
            },
        },
        cssmin: {
            dist: {
                files: {
                    'dist/css/main.css': 'dist/css/main.css'
                }
            },
        },
        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'public/index.html',
                    'dist/about.html': 'public/about.html'
                }
            }
        }
    });



    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('serve', ['connect:start', 'watch']);
    grunt.registerTask('build', ['uncss', 'cssmin', 'htmlmin']);






}