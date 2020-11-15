console.log('Assertions')

let cadena: any = 'soy una cadena';

let longitud: number = cadena.length;

console.log('longitud: ', longitud)
console.log('longitud casting 1: ', (<string>cadena).length)
console.log('longitud casting 2: ', (cadena as string).length)
