const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function haciendoEstilos() {
    return src('sass/*.scss') // Ruta de los archivos SCSS
        .pipe(sass()) // Compila SCSS a CSS
        .pipe(dest('css')); // Destino de los archivos CSS compilados
}

function observandoEstilos() {
    watch('sass/*.scss', haciendoEstilos); // Observa cambios en los archivos SCSS
}
exports.default = series(haciendoEstilos, observandoEstilos); // Tarea por defecto que compila y observa