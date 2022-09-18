import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { RestService } from 'src/app/service/rest.service';

import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';


@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  nombreExperiencia: string;
  descripcionExperiencia: string;
  imagenExperiencia: string;
  urlViewImg: string;

  public archivos: any = []

  constructor(
    private experienciaService: ExperienciaService,
    private router: Router,
    private rest: RestService,
    private storage: Storage
  ) { }

  ngOnInit(): void {
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
          console.log("url archivo leido: "+ this.urlViewImg)
        }
      )
      .catch(error => console.log(error));
  }


  onCreate() {
    const expe = new Experiencia(
      this.nombreExperiencia, 
      this.descripcionExperiencia,
      this.urlViewImg
      );
    
      //console.log(expe)
      /* */
    this.experienciaService.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló al guardar experiencia");
        this.router.navigate(['']);
      }
    )
    
  }
}
