import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';
import { SkillService } from 'src/app/service/skill.service';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.scss']
})
export class EditSkillComponent implements OnInit {
  skill: Skill = null;
  UrlimagenHyS: string;
  public archivos: any = []

  constructor(
    private skillService: SkillService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private rest: RestService,
    private storage: Storage

  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert('error al tratar de editar')
        this.router.navigate([''])
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
          this.UrlimagenHyS = urlImg
          console.log("url archivo leido: " + this.UrlimagenHyS)
        }
      )
      .catch(error => console.log(error));
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skill.imagenHyS = this.UrlimagenHyS

    if(!this.skill.imagenHyS){
      alert("Error la imagen todavia no se ha guardado en la base de datos por favor espero unos momentos");
    }else{
      this.skillService.update(id, this.skill).subscribe(
        data => {
          alert("Skill modificada correctamente");
          this.router.navigate([''])
        }, err => {
          alert("Error al Modificar Skill");
          this.router.navigate(['']);
        }
      )
    }
  }

}
