var gulp 			= require('gulp');
     watch          = require('gulp-watch');
var clean 			= require('gulp-clean');
var concat 			= require('gulp-concat');
var ngdocs 			= require('gulp-ngdocs');
var sass 			= require('gulp-sass');
var uglify 			= require('gulp-uglify');
var htmlmin         = require('gulp-htmlmin');
var gulpSequence = require('gulp-sequence');
var Server = require('karma').Server;


var buildDir 		= 'bin/';
var depsJS 			= ["bower_components/jquery/dist/jquery.js",
					    "bower_components/angular/angular.js",
					    "bower_components/angular-route/angular-route.js",
					   "bower_components/angular-mocks/angular-mocks.js", 
					   
					    "bower_components/angular-sanitize/angular-sanitize.js", 
					   
					    "bower_components/angular-bootstrap/ui-bootstrap.js",
					     "bower_components/angular-bootstrap/ui-bootstrap-tpls.js", 
					    "bower_components/angular-animate/angular-animate.js",
					    
                   "bower_components/slick-carousel/slick/slick.min.js",
                    "bower_components/angular-slick/dist/slick.js"
					];
var appJS 			= [ 
                        'src/js/app.js',
						
						'src/js/config.js',

						"src/js/service.js",
						
						'src/js/controllers/*.js',
					
				        'src/js/filters.js',

				        "src/js/jquery/*js"
						];

/** tasks **/
/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});


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
	return gulp.src([
		             "src/sass/**/*.scss"])
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest("src/css/"));
});


gulp.task("devCSS", function(){
	return gulp.src(["src/css/theme.css",
		             
		            
                     "src/css/style.css"
		            ])
	.pipe(concat("style.css"))
	.pipe(gulp.dest(""));
});






gulp.task("default", function(callback){
     gulpSequence("minify","devJS","devDeps", "devCSS","sass","tdd", callback);
});

gulp.task("watch", function(){
    
   
    gulp.watch("src/js/**/*.js", ["devJS"]);
    gulp.watch("src/partials/partials/*.html", ["minify"]);
    gulp.watch("src/sass/**/*.scss", ["sass"]);
    gulp.watch("src/css/*.css", ["devCSS"]);
    gulp.watch("src/js/**/*.js",  ["tdd"]);
   
    
 });