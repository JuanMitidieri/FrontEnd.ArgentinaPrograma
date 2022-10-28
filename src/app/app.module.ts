import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {  HttpClientModule } from '@angular/common/http';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { ExpLabComponent } from './exp-lab/exp-lab.component';
import { EducacionComponent } from './educacion/educacion.component';
import { NewExperienciaComponent } from './exp-lab/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './exp-lab/edit-experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './educacion/neweducacion/neweducacion.component';
import { EditeducacionComponent } from './educacion/editeducacion/editeducacion.component';
import { NewproyectoComponent } from './proyectos/newproyecto/newproyecto.component';
import { EditproyectoComponent } from './proyectos/editproyecto/editproyecto.component';
import { NewskillComponent } from './skills/newskill/newskill.component';
import { EditskillComponent } from './skills/editskill/editskill.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutmeComponent,
    HomeComponent,
    LoginComponent,
    SkillsComponent,
    ProyectosComponent,
    ExpLabComponent,
    EducacionComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    NewproyectoComponent,
    EditproyectoComponent,
    NewskillComponent,
    EditskillComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
