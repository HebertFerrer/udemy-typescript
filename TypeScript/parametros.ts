
function activar(
    quien:string,
    objeto:string = 'Batisenal',
    momento?:string
) {

    let mensaje:string;

    if (momento) {
        mensaje = `${ quien } activo la ${ objeto } en la ${ momento }`;
    } else {
        mensaje = `${ quien } activo la ${ objeto }`;
    }

    console.log(mensaje);

}

activar('Hebert');
