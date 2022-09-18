export class Experiencia {
    id?: number;
    nombreExperiencia: string;
    descripcionExperiencia: string;
    imagenExperiencia: any;

    constructor(
        nombreExperiencia: string,
        descripcionExperiencia: string,
        imagenExperiencia: any
        ) {
        this.nombreExperiencia = nombreExperiencia;
        this.descripcionExperiencia = descripcionExperiencia;
        this.imagenExperiencia = imagenExperiencia;
    }
}
