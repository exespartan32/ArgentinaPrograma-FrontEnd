import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.scss']
})
export class EditProyectoComponent implements OnInit {
  proyecto: Proyecto = null;
  urlImagenProyecto;
  public archivos: any = []
  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private storage: Storage,
    private proyectoService: ProyectoService,
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe(
      data => {
        this.proyecto = data;
      },err => {
        alert("Error al buscar el Proyecto");
        this.router.navigate(['']);
      }
    )
  }

  capturarFile(event: any): any {
    const archivoCapturado = event.target.files[0]
    this.archivos.push(archivoCapturado);
    //console.log(event.target.files)

    const imgRef = ref(this.storage, `images/${archivoCapturado.name}`)

    uploadBytes(imgRef, archivoCapturado)
      .then(
        async response => {
          const imgRef = response.ref
          const urlImg = await getDownloadURL(imgRef)
          this.urlImagenProyecto = urlImg
          console.log("url archivo leido: " + this.urlImagenProyecto)
        }
      )
      .catch(error => console.log(error));
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyecto.imagenProyecto = this.urlImagenProyecto;

    if (!this.proyecto.imagenProyecto){
      alert("Error la imagen todavia no se ha guardado en la base de datos por favor espero unos momentos");
    }else{
      this.proyectoService.update(id, this.proyecto).subscribe(
        data => {
          alert('proyecto actalizado')
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar el proyecto");
          this.router.navigate(['']);
        }
      )
    }
  }

}
