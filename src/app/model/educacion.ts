export class Educacion {
    id?: number;
    nombreEducacion: string;
    descripcionEducacion: string;
    imagenEducacion: string;

    constructor(
        nombreEducacion: string, 
        descripcionEducacion: string,
        imagenEducacion: string
        ) {
        this.nombreEducacion = nombreEducacion;
        this.descripcionEducacion = descripcionEducacion;
        this.imagenEducacion = imagenEducacion;
    }
}
