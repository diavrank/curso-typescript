console.log('Clases');

class Estudiante {
    private nombre: string = '';
    apellido: string = '';
    edad: number = 18;
    private readonly numeroCarnet: number;
    estado: boolean;

    protected obtenerNombre(): string {
        return this.nombre;
    }
}

let estudiante = new Estudiante();
console.log(estudiante);

class Empleado extends Estudiante {
    nombreCompleto: string = this.obtenerNombre();
}

class Utilidad {
    static pi: number = 3.1416;

    static calcularAreaDeCirculo(radio: number): number {
        return radio * radio * this.pi;
    }
}
console.log('PI: ',Utilidad.pi);
console.log('Area del circulo: ',Utilidad.calcularAreaDeCirculo(5));