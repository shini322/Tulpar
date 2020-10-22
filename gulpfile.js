let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('scss', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({outputStyle: ''}))
        .pipe(autoprefixer({
        overrideBrowserslist: ['last 8 versions']
        }))
        .pipe(gulp.dest('app/'))
        .pipe(browserSync.reload({stream: true}))
    });
gulp.task('css', function(){
    return gulp.src([
      'node_modules/wowjs/css/libs/animate.css',
      'node_modules/normalize.css/normalize.css',
      'node_modules/swiper/swiper-bundle.min.css',
    ])
      .pipe(concat('_libs.scss'))
      .pipe(gulp.dest('app/scss'))
      .pipe(browserSync.reload({stream: true}))
  });

gulp.task('html', function(){
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('script', function(){
    return gulp.src('app/js/*.js')
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function(){
    return gulp.src([        
        'node_modules/wowjs/dist/wow.min.js',
        'node_modules/swiper/swiper-bundle.min.js',
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('watch',function(){
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'))
    gulp.watch('app/*.html', gulp.parallel('html'))
    gulp.watch('app/js/*.js', gulp.parallel('script'))
});

gulp.task('default', gulp.parallel('scss', 'js', 'browser-sync', 'watch'))