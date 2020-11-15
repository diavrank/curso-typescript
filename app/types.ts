type Heroe = {
    nombre: string,
    edad: number,
    poderes: string[],
    getNombre: () => string
}

let flash: Heroe = {
    nombre: 'Flash',
    edad: 24,
    poderes: ['Corre rapido'],
    getNombre() {
        return this.nombre;
    }
}