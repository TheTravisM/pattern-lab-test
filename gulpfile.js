/******************************************************
 * PATTERN LAB NODE
 * EDITION-NODE-GULP
 * The gulp wrapper around patternlab-node core, providing tasks to interact with the core library and move supporting frontend assets.
******************************************************/
var gulp = require('gulp'),
path = require('path'),
browserSync = require('browser-sync').create(),
sass = require('gulp-sass'),
sourcemaps = require('gulp-sourcemaps'),
autoprefixer = require('gulp-autoprefixer'),
sassdoc = require('sassdoc'),
argv = require('minimist')(process.argv.slice(2)),
concat = require('gulp-concat'),
rename = require('gulp-rename'),
uglify = require('gulp-uglify');

var autoprefixerOptions = {
browsers: ['last 10 versions', '> 10%', 'Firefox ESR', 'iOS 7']
};

function resolvePath(pathInput) {
return path.resolve(pathInput).replace(/\\/g,"/");
}

var jsFiles = ['./source/js/picturefill.min.js',
             './source/js/jquery-2.1.1.js',
             './source/js/isotope.pkgd.min.js',
             './source/js/jquery.lazyload.min.js',
             './source/js/modernizr.js',
             './source/js/slick.min.js',
             './source/js/app.js' ];

/******************************************************
* COPY TASKS - stream assets from source to destination
******************************************************/
// JS copy
gulp.task('pl-copy:js', function(){
return gulp.src(jsFiles)
  .pipe(sourcemaps.init())
  .pipe(concat('patternlab.js'))
  .pipe(gulp.dest(resolvePath(paths().public.js)))
  .pipe(rename('patternlab.min.js'))
  .pipe(uglify())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(resolvePath(paths().public.js)));
});

// JS move picture fill only if using in the head of DOM
gulp.task('pl-copy:js-picturefill', function(){
return gulp.src(['./source/js/picturefill.min.js'])
  .pipe(gulp.dest(resolvePath(paths().public.js)));
});

// Images copy
gulp.task('pl-copy:img', function(){
return gulp.src('**/*.*',{cwd: resolvePath(paths().source.images)} )
  .pipe(gulp.dest(resolvePath(paths().public.images)));
});

// Favicon copy
gulp.task('pl-copy:favicon', function(){
return gulp.src('favicon.ico', {cwd: resolvePath(paths().source.root)} )
  .pipe(gulp.dest(resolvePath(paths().public.root)));
});

// Fonts copy
gulp.task('pl-copy:font', function(){
return gulp.src('*', {cwd: resolvePath(paths().source.fonts)})
  .pipe(gulp.dest(resolvePath(paths().public.fonts)));
});

// CSS Copy
gulp.task('pl-copy:css', function(){
return gulp.src(resolvePath(paths().source.css) + '/*.css')
  .pipe(gulp.dest(resolvePath(paths().public.css)))
  .pipe(browserSync.stream());
});

// Styleguide Copy everything but css
gulp.task('pl-copy:styleguide', function(){
return gulp.src(resolvePath(paths().source.styleguide) + '/**/!(*.css)')
  .pipe(gulp.dest(resolvePath(paths().public.root)))
  .pipe(browserSync.stream());
});

// Styleguide Copy and flatten css
gulp.task('pl-copy:styleguide-css', function(){
return gulp.src(resolvePath(paths().source.styleguide) + '/**/*.css')
  .pipe(gulp.dest(function(file){
    //flatten anything inside the styleguide into a single output dir per http://stackoverflow.com/a/34317320/1790362
    file.path = path.join(file.base, path.basename(file.path));
    return resolvePath(path.join(paths().public.styleguide, '/css'));
  }))
  .pipe(browserSync.stream());
});

// SASS Compilation
gulp.task('pl-sass', function(){
return gulp.src(path.resolve(paths().source.css, '**/*.scss'))
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(autoprefixer(autoprefixerOptions))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(path.resolve(paths().source.css)));
  //.pipe(sassdoc())
  // Release the pressure back and trigger flowing mode (drain)
  // See: http://sassdoc.com/gulp/#drain-event
  //.resume();
});

var sassdocOptions = {
dest: './public/sassdoc'
};

gulp.task('sassdoc', function () {
return gulp.src(path.resolve(paths().source.css, '**/*.scss'))
  .pipe(sassdoc())
  // Either trigger `resume` event.
  .resume();
  return gulp.series(
      clean
  )();
});

/******************************************************
* PATTERN LAB CONFIGURATION - API with core library
******************************************************/
//read all paths from our namespaced config file
var config = require('./patternlab-config.json'),
patternlab = require('patternlab-node')(config);

function paths() {
return config.paths;
}

function getConfiguredCleanOption() {
return config.cleanPublic;
}

function build(done) {
patternlab.build(done, getConfiguredCleanOption());
}

gulp.task('pl-assets', gulp.series(
gulp.parallel(
  'pl-copy:js',
  'pl-copy:img',
  'pl-copy:favicon',
  'pl-copy:font',
  gulp.series('pl-sass', 'pl-copy:css', function(done){done();}),
  'pl-copy:styleguide',
  'pl-copy:styleguide-css'
),
function(done){
  done();
})
);

gulp.task('patternlab:version', function (done) {
patternlab.version();
done();
});

gulp.task('patternlab:help', function (done) {
patternlab.help();
done();
});

gulp.task('patternlab:patternsonly', function (done) {
patternlab.patternsonly(done, getConfiguredCleanOption());
});

gulp.task('patternlab:liststarterkits', function (done) {
patternlab.liststarterkits();
done();
});

gulp.task('patternlab:loadstarterkit', function (done) {
patternlab.loadstarterkit(argv.kit, argv.clean);
done();
});

gulp.task('patternlab:build', gulp.series('pl-assets', build, function(done){
done();
}));

gulp.task('patternlab:installplugin', function (done) {
patternlab.installplugin(argv.plugin);
done();
});

/******************************************************
* SERVER AND WATCH TASKS
******************************************************/
// watch task utility functions
function getSupportedTemplateExtensions() {
var engines = require('./node_modules/patternlab-node/core/lib/pattern_engines');
return engines.getSupportedFileExtensions();
}
function getTemplateWatches() {
return getSupportedTemplateExtensions().map(function (dotExtension) {
  return resolvePath(paths().source.patterns) + '/**/*' + dotExtension;
});
}

function reload() {
browserSync.reload();
}

function reloadCSS() {
browserSync.reload('*.css');
}

function reloadJS() {
browserSync.reload('*.js');
}

function watch() {
gulp.watch(resolvePath(paths().source.css) + '/**/*.css', { awaitWriteFinish: true }).on('change', gulp.series('pl-copy:css', reloadCSS));
gulp.watch(resolvePath(paths().source.styleguide) + '/**/*.*', { awaitWriteFinish: true }).on('change', gulp.series('pl-copy:styleguide', 'pl-copy:styleguide-css', reloadCSS));
gulp.watch(path.resolve(paths().source.css, '**/*.scss')).on('change', gulp.series('pl-sass'));

gulp.watch(resolvePath(paths().source.js) + '/**/*.js', { awaitWriteFinish: true }).on('change', gulp.series('pl-copy:js', reloadJS));

var patternWatches = [
  resolvePath(paths().source.patterns) + '/**/*.json',
  resolvePath(paths().source.patterns) + '/**/*.md',
  resolvePath(paths().source.data) + '/*.json',
  resolvePath(paths().source.js) + '/*',
  resolvePath(paths().source.fonts) + '/*',
  resolvePath(paths().source.images) + '/*',
  resolvePath(paths().source.css) + '/*',
  resolvePath(paths().source.meta) + '/*',
  resolvePath(paths().source.annotations) + '/*'
].concat(getTemplateWatches());

console.log(patternWatches);

gulp.watch(patternWatches, { awaitWriteFinish: true }).on('change', gulp.series(build, reload));
}

gulp.task('patternlab:connect', gulp.series(function(done) {
browserSync.init({
  server: {
    baseDir: resolvePath(paths().public.root)
  },
  snippetOptions: {
    // Ignore all HTML files within the templates folder
    blacklist: ['/index.html', '/', '/?*']
  },
  notify: {
    styles: [
      'display: none',
      'padding: 15px',
      'font-family: sans-serif',
      'position: fixed',
      'font-size: 1em',
      'z-index: 9999',
      'bottom: 0px',
      'right: 0px',
      'border-top-left-radius: 5px',
      'background-color: #1B2032',
      'opacity: 0.4',
      'margin: 0',
      'color: white',
      'text-align: center'
    ]
  }
}, function(){
  console.log('PATTERN LAB NODE WATCHING FOR CHANGES');
  done();
});
}));

/******************************************************
* COMPOUND TASKS
******************************************************/
gulp.task('default', gulp.series('patternlab:build'));
gulp.task('patternlab:watch', gulp.series('patternlab:build', watch));
gulp.task('patternlab:serve', gulp.series('patternlab:build', 'patternlab:connect', watch));
