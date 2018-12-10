const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");

const fs = require("fs");
const util = require("util");
const error = console.error;

let readDirectory = util.promisify(fs.readdir);

// コマンド名 'minify' を登録
gulp.task("minify", () => {
  // ターゲットディレクトリ
  const codeDir = "public";
  // html-minifierのオプション
  const minOptions = {
    collapseWhitespace: true,
    caseSensitive: true
  };

  readDirectory(codeDir)
    .then(() => {
      // 'public' ディレクトリが存在している時の処理
      return (
        gulp
          // ディレクトリに含まれる htmlファイルを全て指定
          .src(`${codeDir}/**/*.html`)
          // ここで圧縮、引数はminifyする時のオプション
          .pipe(htmlmin(minOptions))
          // 'public' ディレクトリにオーバーライド
          .pipe(gulp.dest(codeDir))
      );
    })
    // 'public' ディレクトリが存在しない時に返す処理
    .catch(() => error(`Direcitory : '${codeDir}' does't exist .`));
}); // ! minify
