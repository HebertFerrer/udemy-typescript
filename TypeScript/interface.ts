interface Avenger {
    nombre:string,
    poder:string
}

let ironMan:Avenger = {
    nombre: 'Tony stark',
    poder: 'Traje'
}

function enviarMision(avenger:Avenger) {
    console.log(`El avenger ${avenger.nombre} va en camino!`);
}

enviarMision(ironMan);
