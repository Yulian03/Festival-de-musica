const { src, dest, watch } = require("gulp");  //requiere es un forma de extraer el gulp
const sass = require("gulp-sass") (require('sass'));

function css (done){

    src("src/scss/**/*.scss")   //Identificar el archivo SASS
        .pipe(sass())         //Compilarlo
        .pipe(dest("build/css")) //Almacernarla en el disco duro

    done (); //callback que avisa a gulp cuando llegamos al final
}

function dev(done) {

    watch("src/scss/**/*.scss", css)

    done();
}

exports.css = css;
exports.dev = dev;