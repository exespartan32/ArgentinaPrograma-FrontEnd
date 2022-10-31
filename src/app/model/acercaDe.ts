export class Perfil {
    id?: number;
    profesion: string;
    acercaDe: string;
    
    constructor(profesion: string, acercaDe: string){
        this.profesion = profesion;
        this.acercaDe = acercaDe;
    }
}