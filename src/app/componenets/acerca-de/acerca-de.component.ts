import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/model/acercaDe';
import { Persona } from 'src/app/model/persona.model';
import { PerfilService } from 'src/app/service/perfil.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: Persona = new Persona("", "", "");
  perfil: Perfil = new Perfil("", "");

  constructor(
    public personaService: PersonaService,
    private tokenService: TokenService,
    private perfilService: PerfilService
  ) { }

  isLogged = false;

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.personaService.getPersona().subscribe(data => { this.persona = data })
    this.cargarPerfil();
    //console.log(this.personaService)
  }

  cargarPerfil(): void {
    this.perfilService.getProfile().subscribe(
      data => {
        this.perfil = data;
      }
    )
  }

}
