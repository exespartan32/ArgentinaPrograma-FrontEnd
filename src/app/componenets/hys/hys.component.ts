import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  skill: Skill[] = []
  isLogged = false;

  constructor(
    private tokenService: TokenService,
    private skillService: SkillService,
  ) { }

  ngOnInit(): void {
    this.cargarSkills();
    //console.log(this.cargarSkills)
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillService.lista().subscribe(data => {
      this.skill = data
      //console.log(this.skill)
    })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.skillService.delete(id).subscribe(
        data => {
          this.cargarSkills()
        }, err => {
          alert("No se pudo borrar la HyS Skill");
        }
      )
    }
  }

}
