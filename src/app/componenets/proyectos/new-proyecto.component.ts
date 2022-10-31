import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { Proyecto } from 'src/app/model/proyecto';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.scss']
})
export class NewProyectoComponent implements OnInit {
  nombreProyecto: string;
  descripcionProyecto: string;
  imagenProyecto: string;
  linkProyecto: string;
  public archivos: any = []
  
  constructor(
    private proyectoService: ProyectoService,
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit(): void {
  }

  capturarFile(event: any) {
    const archivoCapturado = event.target.files[0]
    this.archivos.push(archivoCapturado)

    const imgRef = ref(this.storage, `images/${archivoCapturado.name}`)

    uploadBytes(imgRef, archivoCapturado)
      .then(
        async response => {
          const imgRef = response.ref
          const urlImg = await getDownloadURL(imgRef)
          this.imagenProyecto = urlImg
          console.log("url archivo leido: " + this.imagenProyecto)
        }
      )
      .catch(error => console.log(error));
  }

  onCreate(): void {
    const proyecto = new Proyecto(
      this.nombreProyecto,
      this.descripcionProyecto,
      this.imagenProyecto,
      this.linkProyecto
    );
    if (!this.imagenProyecto) {
      alert("¡¡error!! la imagen no se ha subido a la DB, espere unos instantes hasta que se suba a la base de datos");
    } else {
      this.proyectoService.save(proyecto).subscribe(
        data => {
          alert("Proyecto añadido correctamente");
          this.router.navigate(['']);
        }, err => {
          alert("falló al agregar el proyecto");
          this.router.navigate(['']);
        }
      )
    }
  }

}
