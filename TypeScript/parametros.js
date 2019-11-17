"use strict";
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = 'Batisenal'; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activo la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activo la " + objeto;
    }
    console.log(mensaje);
}
activar('Hebert');
