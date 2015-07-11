module.exports = function(grunt){
	grunt.loadNpmTasks("grunt-contrib-copy");


	grunt.initConfig({
		copy: {

			all: {
				cwd: "dev"
				,dest: "prod"
				,src: "**"
				,expand: true
			}
		}
	});
	grunt.registerTask("default",["copy"]);
}