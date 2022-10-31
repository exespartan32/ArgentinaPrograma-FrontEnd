import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/model/acercaDe';
import { Storage } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.scss']
})
export class EditAcercaDeComponent implements OnInit {
  perfil: Perfil = null;
  constructor(
    private storage: Storage,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private perfilService: PerfilService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.perfilService.detail(id).subscribe(
      data => {
        this.perfil = data
      },err => {
        alert("error al buscar acercaDe")
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    this.perfilService.update(id, this.perfil).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar acercaDe");
        this.router.navigate(['']);
      }
    )
  }

}
