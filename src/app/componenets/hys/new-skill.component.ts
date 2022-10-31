import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { RestService } from 'src/app/service/rest.service';
import { SkillService } from 'src/app/service/skill.service';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.scss']
})
export class NewSkillComponent implements OnInit {
  nombre: string;
  porcentaje: number;
  imagenHyS: string;
  UrlimagenHyS: string;


  public archivos: any = []
  constructor(
    private skillService: SkillService, 
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
          this.UrlimagenHyS = urlImg
          console.log("url archivo leido: " + this.UrlimagenHyS)
        }
      )
      .catch(error => console.log(error));
  }

  onCreate(){
    const skill = new Skill(
      this.nombre,
      this.porcentaje,
      this.UrlimagenHyS
    )
    //console.log(skill)
    if(!this.UrlimagenHyS){
      alert("¡¡error!! la imagen no se ha subido a la DB, espere unos instantes hasta que se suba a la base de datos");
    }else {
      this.skillService.save(skill).subscribe(
        data => {
          alert("Skill añadida");
          this.router.navigate(['']);
        }, err => {
          alert("Falló al guardar la nueva Skill");
          this.router.navigate(['']);
        }
      )
    }
  }



}
