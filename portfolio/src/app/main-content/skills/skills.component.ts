import { Component } from '@angular/core';
import { CommonModule, NgFor  } from '@angular/common';
import { slideInFromBottom, fadeIn, hoverTimeoutAnimation, fontWeightAnimation } from '../../animations/animations'; 
import { ScrollVisibilityDirective } from '../directives/scroll-visibility.directive';
import { TranslateModule } from '@ngx-translate/core';
/**
 * Component that displays a list of technical skills with animations.
 */
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, CommonModule, ScrollVisibilityDirective, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [slideInFromBottom, fadeIn, hoverTimeoutAnimation, fontWeightAnimation  ]
})
export class SkillsComponent {
  /** Controls the visibility state of the entire skills section. */
  isVisible = false;
  hoverStates: { [key: string]: string } = {};
  fontStates: { [key: string]: string } = {};
  /**
   * List of skills, each containing a name, image source, and visibility status.
   */
  skills = [
    { name: 'Angular', image: '../../assets/img/Property 1=Angular.png'},
    { name: 'TypeScript', image: '../../assets/img/Property 1=Typescript.png'},
    { name: 'JavaScript', image: '../../assets/img/Property 1=JavScript.png'},
    { name: 'HTML', image: '../../assets/img/Property 1=html.png'},
    { name: 'CSS', image: '../../assets/img/Property 1=css.png'},
    { name: 'Git', image: '../../assets/img/git.png', isVisible: false },
    { name: 'Firebase', image: '../../assets/img/Property 1=Firebase.png'},
    { name: 'Scrum', image: '../../assets/img/Property 1=Scrum.png'},
    { name: 'Material Design', image: '../../assets/img/Property 1=Material des..png'},
    { name: 'Rest API', image: '../../assets/img/Property 1=Api.png'},
  ];

  /**
   * Updates the visibility state of the entire skills section when it enters the viewport.
   *
   * @param {boolean} isVisible - Whether the section is visible.
   */
  onVisibilityChange(isVisible: boolean): void {
    this.isVisible = isVisible;
  }

  handleMouseEnter(skill: string) {
    this.hoverStates[skill] = 'hover';
    this.fontStates[skill] = 'medium'; 
  }

  handleMouseLeave(skill: string) {
    this.hoverStates[skill] = 'normal';
   this.fontStates[skill] = 'normal';
  }
  
  handleTouchStart(skill: string) {
    this.hoverStates[skill] = 'hover';
    this.fontStates[skill] = 'medium';
    setTimeout(() => {
      this.hoverStates[skill] = 'normal';
      this.fontStates[skill] = 'normal';
    }, 300);
  }
}

