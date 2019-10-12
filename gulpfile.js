const gulp         = require("gulp");
const cache        = require('gulp-cached');
const changed      = require('gulp-changed');

const htmlmin      = require('gulp-htmlmin');

const stylus       = require('gulp-stylus');
const cssmin       = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

const imagemin     = require('gulp-imagemin');
const jpeg         = require('imagemin-mozjpeg');
const png          = require('imagemin-pngquant');
const gif          = require('imagemin-gifsicle');
const responsive   = require('gulp-responsive');

gulp.task('html', () =>
    gulp.src('public/*.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('public'))
);

gulp.task('css', () =>
    gulp.src('themes/2001Y.me/static/style/*.styl')
        .pipe(cache( 'css' ))
        .pipe(stylus())
        .pipe(autoprefixer({
            stats: ['> 3% in JP']
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('themes/2001Y.me/static/style'))
);

gulp.task('img', () =>
    gulp.src('images/*.{png,jpeg,jpg,JPG,gif}')
        .pipe(changed( 'static/img' ))
        .pipe(imagemin([
            jpeg({ quality: 80 }),
            png(),
            gif()
        ]))
        .pipe(responsive({
            '*.{png,jpeg,jpg,JPG,gif}': [{},{
                format: 'webp'
            },{
                format: 'webp',
                width: 700,
                rename: { suffix: '-700' }
            },{
                width: 700,
                rename: { suffix: '-700' }
            },{
                format: 'webp',
                width: 100,
                rename: { suffix: '-100' }
            },{
                width: 100,
                rename: { suffix: '-100' }
            },{
                format: 'webp',
                width: 600,
                height: 500,
                rename: { suffix: '-500-tmb' }
            },{
                width: 600,
                height: 500,
                rename: { suffix: '-500-tmb' }
            }]
        }))
        .pipe(gulp.dest('static/img'))
);