
export class Asignatura {
    public format: string;
    public text: string;
    public asignatura: string;
    public fecha: Date;

    constructor( text: string ) {

        this.text = text;
        this.fecha = new Date();
        this.determinarAsignatura();
    }

    private determinarAsignatura() {
        const sigla = this.text;

        switch( sigla ) {

            case 'CSY4111':
                this.asignatura ='Calidad de software';
            break;

            case 'PGY4121':
                this.asignatura = 'Aplicaciones moviles';
            break;

            case 'ASY4131':
                this.asignatura = 'Arquitectura';
            break;

            case 'INI5111':
                this.asignatura = 'Ingles Intermedio';
            break;

            case 'MAT4140':
                this.asignatura = 'Estadistica Descriptiva';
            break;

            default:
            break;

        }
    }
}
