import { Component, OnInit } from '@angular/core';
import { Skills } from '../model/skills';
import { SkillsService } from '../service/skills.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skills[] = [];

  constructor(private skillsS: SkillsService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkill();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkill(): void{
    this.skillsS.lista().subscribe(
      data =>{
        this.skills = data;
      }
    )
  }

  delete(id?: number){
    
    if( id != undefined){
      this.skillsS.delete(id).subscribe(
        data => {
          this.cargarSkill();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}