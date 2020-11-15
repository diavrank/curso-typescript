console.log('Interfaces')

interface IFigura {
    alto?: number,
    ancho: number
}

let figura: IFigura = {ancho: 12};

interface IPunto {
    readonly x: number,
    readonly y: number
}

let punto: IPunto = {x: 14, y: 56}

interface IMatematica {
    total?: number;

    sumar(a: number, b: number): number;

    restar(a: number, b: number): number;
}

class Util implements IMatematica {
    sumar(a: number, b: number): number {
        return a + b;
    }
    restar(a: number, b: number): number {
        return a-b;
    }
}