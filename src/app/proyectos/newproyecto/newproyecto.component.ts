import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';


@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.scss']
})
export class NewproyectoComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  imgE: string;

  constructor(private proyectoS: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyectos(this.nombreE, this.descripcionE, this.imgE);
    this.proyectoS.save(proyecto).subscribe(
      data =>{
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}
