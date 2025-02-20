import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', image: '../../assets/img/Property 1=Angular.png' },
    { name: 'TypeScript', image: '../../assets/img/Property 1=Typescript.png' },
    { name: 'JavaScript', image: '../../assets/img/Property 1=JavScript.png' },
    { name: 'HTML', image: '../../assets/img/Property 1=html.png' },
    { name: 'CSS', image: '../../assets/img/Property 1=css.png' },
    { name: 'Git', image: '../../assets/img/git.png' },
    { name: 'Firebase', image: '../../assets/img/Property 1=Firebase.png' },
    { name: 'Scrum', image: '../../assets/img/Property 1=Scrum.png' },
    { name: 'Material Design', image: '../../assets/img/Property 1=Material des..png' },
    { name: 'Rest API', image: '../../assets/img/Property 1=Api.png' },
  ];
}
