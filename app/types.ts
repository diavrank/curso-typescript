type Heroe = {
    nombre: string,
    edad: number,
    poderes: string[],
}

let flash: Heroe = {
    nombre: 'Flash',
    edad: 24,
    poderes: ['Corre rapido']
}

const getInfoOfHero: Function = (hero: Heroe) => {
    return JSON.stringify(hero);
}

console.log('datos del heroe: ', getInfoOfHero({
    nombre: 'Batman',
    poderes: ['fuerza'],
    superpoder: 'inteligencia'
}));