import { Component, OnInit } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {

  persona: Persona = null
  urlViewImg: string;
  public archivos: any = []

  constructor(
    private storage: Storage,
    private personaS: PersonaService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("error al buscar perfil");
        this.router.navigate(['']);
      }
    )
  }

  capturarFile(event: any) {
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
    this.persona.img = this.urlViewImg
/* 
    console.log("id: "+id)

    this.persona.img = this.urlViewImg

    console.log("datos de la persona")
    console.log(this.persona)
    console.log("url de la imagen en db: "+this.persona.img)
 */
    if (!this.persona.img) {
      alert("Error la imagen todavia no se ha guardado en la base de datos por favor espero unos momentos");
    } else {
      this.personaS.update(id, this.persona).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar la persona");
          this.router.navigate(['']);
        }
      )
    }
  }

}
