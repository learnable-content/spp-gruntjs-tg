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
                    'public/index.html',
                    'public/css/main.css'
                ]
            },
            sass: {
                files: 'public/sass/main.scss',
                tasks: ['sass']
            }
        },
        sass: {
            dist: {
                options: {
                    sourcemap: 'none'
                },
                files: {
                    'public/css/main.css': 'public/sass/main.scss'
                }
            }
        }
    });



    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');


    grunt.registerTask('serve', ['connect:start', 'watch', 'sass']);










}