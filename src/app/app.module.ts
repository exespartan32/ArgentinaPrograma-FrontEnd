import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componenets/header/header.component';
import { BannerComponent } from './componenets/banner/banner.component';
import { AcercaDeComponent } from './componenets/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componenets/experiencia/experiencia.component';
import { EducacionComponent } from './componenets/educacion/educacion.component';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
// ---
import { HysComponent } from './componenets/hys/hys.component';
import { ProyectosComponent } from './componenets/proyectos/proyectos.component';

import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './componenets/footer/footer.component';
import { HomeComponent } from './componenets/home/home.component';
import { LoginComponent } from './componenets/login/login.component';
import { NavegacionComponent } from './componenets/navegacion/navegacion.component';
import { NewExperienciaComponent } from './componenets/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componenets/experiencia/edit-experiencia.component';
import { EditEducacionComponent } from './componenets/educacion/edit-educacion.component';
import { NewEducacionComponent } from './componenets/educacion/new-educacion.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { EditPerfilComponent } from './componenets/acerca-de/edit-perfil.component';
import { EditSkillComponent } from './componenets/hys/edit-skill.component';
import { NewSkillComponent } from './componenets/hys/new-skill.component';
import { EditAcercaDeComponent } from './componenets/acerca-de/edit-acerca-de.component';
import { EditProyectoComponent } from './componenets/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './componenets/proyectos/new-proyecto.component';
import { EditBannerComponent } from './componenets/banner/edit-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavegacionComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EditEducacionComponent,
    NewEducacionComponent,
    EditPerfilComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercaDeComponent,
    EditProyectoComponent,
    NewProyectoComponent,
    EditBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
