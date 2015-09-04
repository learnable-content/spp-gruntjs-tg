/*
All of our Grunt code will go inside this wrapper function
*/
module.exports = function(grunt) {
    /*
    Step 1. Configure Grunt Tasks Inside grunt.InitConfig Object
    */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //pkg property defined to read package.json file
        concat: {
            //name the concat task 
            options: {
                separator: ';'
            },
            dist: {
                src: ['js/*.js'],
                //files we want to concatenate
                dest: 'dist/<%= pkg.name %>.js'
                    //file we want to generate 
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= pkg.author %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
                    //prepends a banner at the beginning of your file.
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        }
    });
    /*
    Step 2. Load Grunt Plugins Below
    */
    
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    /*
    Step 3. Register Grunt Tasks
    */
    
    
    grunt.registerTask('dist', [ 'concat', 'uglify']);
    
}