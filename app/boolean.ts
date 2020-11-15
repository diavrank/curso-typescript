console.log('archivo app 2')

let estadoCivil: boolean = false;

if (estadoCivil) {
    console.log('Casado')
} else {
    console.log('Soltero')
}

function obtenerEstadoCivil() {
    return true;
}

estadoCivil = obtenerEstadoCivil();