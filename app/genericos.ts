console.log('Genéricos')
class Lista<T> {
    elementos: Array<T>;

    constructor() {
        this.elementos = [];
    }

    agregar(elemento: T) {
        this.elementos.push(elemento);
    }

    sumar(): T {
        let resultado: any;
        this.elementos.forEach(a => {
            if (!resultado) {
                resultado = a;
            } else {
                resultado += a;
            }
        });
        return resultado;
    }
}

let misNumeros=new Lista<number>();
misNumeros.agregar(10);
misNumeros.agregar(5);

console.log('misNumeros: ',misNumeros.sumar())

let misCadenas=new Lista<string>();
misCadenas.agregar('hola ');
misCadenas.agregar('mundo');

console.log('misCadenas: ',misCadenas.sumar());