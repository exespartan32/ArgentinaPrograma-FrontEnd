export class Skill {
    id: number;
    nombre: string;
    porcentaje: number;
    imagenHyS: string;

    constructor(nombre:string, porcentaje: number, imagenHyS: string){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.imagenHyS = imagenHyS;
    }
}
