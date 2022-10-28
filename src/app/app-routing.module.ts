import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './educacion/editeducacion/editeducacion.component';
import { NeweducacionComponent } from './educacion/neweducacion/neweducacion.component';
import { EditExperienciaComponent } from './exp-lab/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './exp-lab/new-experiencia/new-experiencia.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EditproyectoComponent } from './proyectos/editproyecto/editproyecto.component';
import { NewproyectoComponent } from './proyectos/newproyecto/newproyecto.component';
import { EditskillComponent } from './skills/editskill/editskill.component';
import { NewskillComponent } from './skills/newskill/newskill.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path: 'nuevaexp',component:NewExperienciaComponent },
  {path: 'editexp/:id', component:EditExperienciaComponent},
  {path: 'nuevaedu', component: NeweducacionComponent},
  {path: 'editedu/:id', component: EditeducacionComponent},
  {path: 'nuevoproyecto', component: NewproyectoComponent},
  {path: 'editproyecto/:id', component: EditproyectoComponent},
  {path: 'nuevoskill', component: NewskillComponent},
  {path: 'editskill/:id', component: EditskillComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
