console.log('Valores por defecto')
function obtenerValores(objeto: { valor1: string, valor2?: number }) {
    let {valor1, valor2} = objeto;
    console.log(valor1);
    console.log(valor2);
}

obtenerValores({valor1: 'onda'});

function saludar(texto: string) {
    console.log(texto);
}

saludar('Hola');