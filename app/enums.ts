console.log('Enumeraciones')

enum Estado {
    activo = 2,
    inactivo = 5
}

console.log(Estado.activo)

enum TRIP {
    PUBLIC = 'public',
    PRIVATE = 'private'
}

console.log(TRIP.PUBLIC);

//enums with objects

class StatusReservation {
    static readonly REQUESTED = new StatusReservation('requested', 'Solicitado');
    static readonly PENDING = new StatusReservation('pending', 'Pendiente');

    // private to disallow creating other instances of this type
    private constructor(private readonly VALUE: string, public readonly TEXT: any) {
    }
}

console.log('StatusReservation: ', StatusReservation.REQUESTED.TEXT)