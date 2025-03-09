import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('slideInFromBottom', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(50px) scale(0.5)',
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0) scale(1)',
      })),
      transition('hidden <=> visible', animate('400ms ease-out'))
    ])
  ]
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

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const element = document.getElementById('skillset');
    if (element) {
      const rect = element.getBoundingClientRect();
      this.isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 100;
    }
  }
}
