console.log('Clases abstractas')

abstract class Animal {
    abstract ruido(): void;
}

class Gato extends Animal {
    ruido(): void {
        console.log('miau');
    }
}

class Perro extends Animal {
    ruido(): void {
        console.log('wau');
    }
}