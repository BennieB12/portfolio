import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { slideInFromBottom, fadeIn } from '../../animations'; 
import { ScrollVisibilityDirective } from '../scroll-visibility.directive'; 

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, CommonModule, ScrollVisibilityDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [slideInFromBottom, fadeIn]
})
export class SkillsComponent {
  isVisible = false;
  
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

  onVisibilityChange(isVisible: boolean) {
    this.isVisible = isVisible;
  }
}
