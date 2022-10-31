import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './componenets/acerca-de/edit-acerca-de.component';
import { EditPerfilComponent } from './componenets/acerca-de/edit-perfil.component';
import { EditBannerComponent } from './componenets/banner/edit-banner.component';
import { EditEducacionComponent } from './componenets/educacion/edit-educacion.component';
import { NewEducacionComponent } from './componenets/educacion/new-educacion.component';
import { EditExperienciaComponent } from './componenets/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componenets/experiencia/new-experiencia.component';
import { HomeComponent } from './componenets/home/home.component';
import { EditSkillComponent } from './componenets/hys/edit-skill.component';
import { HysComponent } from './componenets/hys/hys.component';
import { NewSkillComponent } from './componenets/hys/new-skill.component';
import { LoginComponent } from './componenets/login/login.component';
import { EditProyectoComponent } from './componenets/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './componenets/proyectos/new-proyecto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaExperiencia', component: NewExperienciaComponent},
  {path:'editarExperiencia/:id', component: EditExperienciaComponent},
  {path:'nuevaEducacion', component: NewEducacionComponent},
  {path:'editarEducacion/:id', component: EditEducacionComponent},
  {path:'editarPersona/:id', component: EditPerfilComponent},
  {path: 'nuevaSkill', component: NewSkillComponent},
  {path: 'editarAcercaDe/:id', component: EditAcercaDeComponent},
  {path: 'editarSkill/:id', component: EditSkillComponent},
  {path: 'nuevoProyecto', component: NewProyectoComponent},
  {path: 'editarProyecto/:id', component: EditProyectoComponent},
  {path: 'editarBanner/:id', component: EditBannerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
