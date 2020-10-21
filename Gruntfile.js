module.exports = function(grunt) {
  grunt.initConfig({
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'gtk-3.0/dist/gtk-light.css': 'sass/gtk-3.0/gtk-light.scss',       // 'destination': 'source'
          'gtk-3.0/dist/gtk-dark.css': 'sass/gtk-3.0/gtk-dark.scss',
          'gnome-shell/gnome-shell.css': 'sass/gnome-shell/gnome-shell.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass']);
}