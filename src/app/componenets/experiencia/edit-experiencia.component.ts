import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  expLab: Experiencia = null;
  urlViewImg: string;
  public archivos: any = []

  constructor(
    private experienciaService: ExperienciaService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.detail(id).subscribe(
      data => {
        this.expLab = data;
      }, err => {
        alert("Error al modificar experiencia");
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
          this.urlViewImg = urlImg
          console.log("url archivo leido: " + this.urlViewImg)
        }
      )
      .catch(error => console.log(error));
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    this.expLab.imagenExperiencia = this.urlViewImg

    if(!this.expLab.imagenExperiencia ){
      alert("Error la imagen todavia no se ha guardado en la base de datos por favor espero unos momentos");
    }else{
      this.experienciaService.update(id, this.expLab).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar experiencia");
          this.router.navigate(['']);
        }
      )
    }
    /**/
  }
}
