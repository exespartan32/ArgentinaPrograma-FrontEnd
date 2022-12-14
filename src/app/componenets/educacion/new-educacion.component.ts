import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  nombreEducacion: string;
  descripcionEducacion: string;
  imagenEducacion: string;
  urlViewImg: string;
  public archivos: any = []

  constructor(
    private educacionService: EducacionService,
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
          this.urlViewImg = urlImg
          console.log("url archivo leido: " + this.urlViewImg)
        }
      )
      .catch(error => console.log(error));
  }

  onCreate(): void {
    const educacion = new Educacion(
      this.nombreEducacion,
      this.descripcionEducacion,
      this.urlViewImg
    );
    if (!this.urlViewImg) {
      alert("¡¡error!! la imagen no se ha subido a la DB, espere unos instantes hasta que se suba a la base de datos");
    } else {
      this.educacionService.save(educacion).subscribe(
        data => {
          alert("Educacion añadida correctamente");
          this.router.navigate(['']);
        }, err => {
          alert("falló al agregar la educacion");
          this.router.navigate(['']);
        }
      )
    }


  }
}
