class AvengerClass {
    nombre:string;
    equipo:string;
    nombreReal:string;

    puedePelear:boolean = false;
    peleasGanadas:number = 0;

    constructor(nombre:string, equipo:string, nombreReal:string) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }

}

let antman:AvengerClass = new AvengerClass('Antman', 'Cap', 'Scoot');

console.log(antman);
