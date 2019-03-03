const gulp = require("gulp");
const imagemin = require('gulp-imagemin');
const jpeg = require('imagemin-mozjpeg');
const png = require('imagemin-pngquant');
const gif = require('imagemin-gifsicle');
const responsive = require('gulp-responsive');

gulp.task('default', () =>
    gulp.src('images/*.{png,jpeg,jpg,JPG,gif}')
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
        .pipe(gulp.dest('img/'))
);