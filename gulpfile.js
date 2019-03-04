const gulp = require("gulp");
const changed  = require('gulp-changed');
const cache = require('gulp-cached');

const htmlmin = require('gulp-htmlmin');

const stylus = require('gulp-stylus');
const cssmin = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

const imagemin = require('gulp-imagemin');
const jpeg = require('imagemin-mozjpeg');
const png = require('imagemin-pngquant');
const gif = require('imagemin-gifsicle');
const responsive = require('gulp-responsive');

gulp.task('htmlmin', () =>
    gulp.src('public/*.html')
        .pipe(cache('htmlmining'))
        .pipe(htmlmin())
        .pipe(gulp.dest('public'))
);

gulp.task('autoprefixer', () =>
    gulp.src('themes/2001Y.me/static/style/*.styl')
        .pipe(cache('autoprefixering'))
        .pipe(stylus())
        .pipe(autoprefixer({
            stats: ['> 3% in JP']
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('themes/2001Y.me/static/style'))
);

gulp.task('imgmin', () =>
    gulp.src('images/*.{png,jpeg,jpg,JPG,gif}')
        .pipe(changed('img'))
        .pipe(imagemin([
            jpeg({ quality: 80 }),
            png({ quality: '65-80' }),
            gif(),
        ]))
        .pipe(responsive({
            '*.{png,jpeg,jpg,JPG,gif}': [{
                format: 'webp',
                width: 700,
                rename: { suffix: '-700' }
            },{
                width: 700,
                rename: { suffix: '-700' }
            },{
                format: 'webp',
                width: 500,
                height: 500,
                rename: { suffix: '-500-tmb' }
            },{
                width: 500,
                height: 500,
                rename: { suffix: '-500-tmb' }
            },{
                format: 'webp'
            },{}]
        }))
        .pipe(gulp.dest('img'))
);