"use strict";
var AvengerClass = /** @class */ (function () {
    function AvengerClass(nombre, equipo, nombreReal) {
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return AvengerClass;
}());
var antman = new AvengerClass('Antman', 'Cap', 'Scoot');
console.log(antman);
