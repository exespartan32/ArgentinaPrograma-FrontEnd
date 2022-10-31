export class Proyecto {
    id?: number;
    nombreProyecto: string;
    descripcionProyecto: string;
    imagenProyecto: string;
    linkProyecto: string;

    constructor(
        nombreProyecto: string,
        descripcionProyecto: string,
        imagenProyecto: string,
        linkProyecto: string
    ){
        this.nombreProyecto = nombreProyecto;
        this.descripcionProyecto = descripcionProyecto;
        this.imagenProyecto = imagenProyecto;
        this.linkProyecto = linkProyecto;
    }
}
