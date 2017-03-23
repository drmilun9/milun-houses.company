var gulp 			= require('gulp');
     watch          = require('gulp-watch');
var clean 			= require('gulp-clean');
var concat 			= require('gulp-concat');
var ngdocs 			= require('gulp-ngdocs');
var sass 			= require('gulp-sass');
var uglify 			= require('gulp-uglify');
var htmlmin         = require('gulp-htmlmin');
var runSequence 	= require('run-sequence');


var buildDir 		= 'bin/';
var depsJS 			= ['bower_components/jquery/dist/jquery.min.js',
                      "js/modernizr-custom.js",
					'bower_components/bootstrap/dist/js/bootstrap.min.js',
					'bower_components/angular/angular.min.js',
					'bower_components/angular-route/angular-route.min.js'];
var appJS 			= [ 
                        'js/app.js',
						
						'js/configs.js',
						
						'js/controllers.js',
					
				        'js/filters.js', 
						'js/directives.js'
						];

/** tasks **/
gulp.task("devDeps", function(){
	var depsjs = gulp.src(depsJS);
	return depsjs.pipe(concat("md_deps.js"))
	.pipe(gulp.dest(""));
});


gulp.task("devJS", function(){
	var js = gulp.src(appJS);
	return js.pipe(concat("md.js"))
	.pipe(gulp.dest(""));
});


gulp.task('minify', function() {
  return gulp.src('partials/partials/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('partials'))
});


/*******sass tasks********/
gulp.task("sass", function(){
	return gulp.src(["sass/*.scss"])
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest("css/style.css"));
});


gulp.task("devCSS", function(){
	return gulp.src(["css/theme.css",
		             "bower_components/bootstrap/dist/css/bootstrap.min.css",
		            "css/styles.css"
		            ])
	.pipe(concat("style.css"))
	.pipe(gulp.dest(""));
});






/****Initialize*******/

gulp.task("default", function(callback){
     runSequence("devDeps", "devJS","minify","sass", "devCSS", callback);
});



gulp.task("watch", function(){
    
    gulp.watch("src/js/**/*.js", ["devJS"]);
    gulp.watch("src/partials/partials/*.html", ["minify"]);
    gulp.watch("src/**/*.scss", ["sass"]);
    gulp.watch("src/css/*.css", ["devCSS"]);
   
    
 });
