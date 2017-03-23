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
                      "src/js/modernizr-custom.js",
					'bower_components/bootstrap/dist/js/bootstrap.min.js',
					'bower_components/angular/angular.min.js',
					'bower_components/angular-route/angular-route.min.js'];
var appJS 			= [ 
                        'src/js/general/app.js',
						
						'src/js/general/configs.js',
						
						'src/js/general/phases.sidebar.directive.js',
					
				        'src/js/allfilms/*.js', 
						'src/js/home/*.js',
						'src/js/phases/*.js',
						'src/js/upcomingfilms/*.js',
						'src/js/nextfilm/*.js',
						'src/js/phases1/*.js',
						'src/js/phases2/*.js',
						'src/js/phases3/*.js',
						'src/js/contact/*.js',
                         

                         //for slider
                         "src/js/slider/TweenMax.min.js",
                         "src/js/slider/angular-animate.min.js",
                         "src/js/slider/angular-touch.min.js",
                         "src/js/slider/slideviewer.js"
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
  return gulp.src('src/partials/partials/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('src/partials'))
});


/*******sass tasks********/
gulp.task("sass", function(){
	return gulp.src(["src/sass/**/*.scss"])
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest("src/css/"));
});


gulp.task("devCSS", function(){
	return gulp.src(["bower_components/bootstrap/dist/css/bootstrap.min.css",
		             "src/css/slideviewer.css",
		             "src/css/styles.css"
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
