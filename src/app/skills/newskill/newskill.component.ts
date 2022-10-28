import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-newskill',
  templateUrl: './newskill.component.html',
  styleUrls: ['./newskill.component.scss']
})
export class NewskillComponent implements OnInit {
  nombreE: string;
  imgE: string;

  constructor(private skills: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skills (this.nombreE, this.imgE);
    this.skills.save(skill).subscribe(
      data =>{
        alert("Skill añadido correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}
