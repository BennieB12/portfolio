import { Component } from '@angular/core';
import { CommonModule, NgFor  } from '@angular/common';
import { slideInFromBottom, fadeIn } from '../../animations/animations'; 
import { ScrollVisibilityDirective } from '../directives/scroll-visibility.directive';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, CommonModule, ScrollVisibilityDirective, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [slideInFromBottom, fadeIn]
})
export class SkillsComponent {
  isVisible = false;

  skills = [
    { name: 'Angular', image: '../../assets/img/Property 1=Angular.png', isVisible: false },
    { name: 'TypeScript', image: '../../assets/img/Property 1=Typescript.png', isVisible: false },
    { name: 'JavaScript', image: '../../assets/img/Property 1=JavScript.png', isVisible: false },
    { name: 'HTML', image: '../../assets/img/Property 1=html.png', isVisible: false },
    { name: 'CSS', image: '../../assets/img/Property 1=css.png', isVisible: false },
    { name: 'Git', image: '../../assets/img/git.png', isVisible: false },
    { name: 'Firebase', image: '../../assets/img/Property 1=Firebase.png', isVisible: false },
    { name: 'Scrum', image: '../../assets/img/Property 1=Scrum.png', isVisible: false },
    { name: 'Material Design', image: '../../assets/img/Property 1=Material des..png', isVisible: false },
    { name: 'Rest API', image: '../../assets/img/Property 1=Api.png', isVisible: false },
  ];

  onVisibilityChange(isVisible: boolean) {
    this.isVisible = isVisible;
  }

  onSkillVisibilityChange(index: number, isVisible: boolean) {
    this.skills[index].isVisible = isVisible;
  }

  trackByIndex(index: number): number {
    return index;
  }
}
