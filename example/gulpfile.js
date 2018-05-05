const gulp         = require('gulp'),
      sass         = require('gulp-sass'),
      autoprefixer = require('autoprefixer'),
      postcss      = require('gulp-postcss')

gulp.task('CSS', () => {
  gulp
    .src('./scss/*')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'],
        remove: true,
        add: true,
        cascade: false
      })
    ]))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', () => {
  gulp.watch('./scss/*.scss', ['CSS']);
});

gulp.task('default', ['CSS']);
