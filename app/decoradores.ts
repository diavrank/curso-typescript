console.log('Decoradores')

function DecoradorClase(target: Function) {
    target.prototype.Saludar = function () {
        console.log('Hola decorador');
    }
}

function DecoradorMetodo(esModificable: boolean) {
    return function (target: any, nombrePropiedad: string, descriptor: PropertyDescriptor) {
        descriptor.writable = esModificable;
    };
}

function DecoradorPropiedad(esModificable: boolean) {
    return function (target: any, nombrePropiedad: string):any {
        let descriptor: PropertyDescriptor = {
            writable: esModificable
        }
        return descriptor;
    };
}

@DecoradorClase
class Persona {
    @DecoradorPropiedad(true)
    _nombre: string;

    constructor(nombre: string) {
        this._nombre = nombre;
    }

    @DecoradorMetodo(true)
    enviarMensaje(): void {
        console.log('Enviando mensaje del decorador')
    }
}

let persona = new Persona("ivan");
console.log(persona)
persona.Saludar();
persona.enviarMensaje = function () {
    console.log('modificada');
}
persona.enviarMensaje();