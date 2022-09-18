import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPerfilComponent } from './componenets/acerca-de/edit-perfil.component';
import { EditEducacionComponent } from './componenets/educacion/edit-educacion.component';
import { NewEducacionComponent } from './componenets/educacion/new-educacion.component';
import { EditExperienciaComponent } from './componenets/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componenets/experiencia/new-experiencia.component';
import { HomeComponent } from './componenets/home/home.component';
import { LoginComponent } from './componenets/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaExperiencia', component: NewExperienciaComponent},
  {path:'editarExperiencia/:id', component: EditExperienciaComponent},
  {path:'nuevaEducacion', component: NewEducacionComponent},
  {path:'editarEducacion/:id', component: EditEducacionComponent},
  {path:'editarPersona/:id', component: EditPerfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
