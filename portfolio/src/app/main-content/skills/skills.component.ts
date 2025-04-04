import { Component } from '@angular/core';
import { CommonModule, NgFor  } from '@angular/common';
import { slideInFromBottom, fadeIn } from '../../animations/animations'; 
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
  animations: [slideInFromBottom, fadeIn]
})
export class SkillsComponent {
  /** Controls the visibility state of the entire skills section. */
  isVisible = false;

  /**
   * List of skills, each containing a name, image source, and visibility status.
   */
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

  /**
   * Updates the visibility state of the entire skills section when it enters the viewport.
   *
   * @param {boolean} isVisible - Whether the section is visible.
   */
  onVisibilityChange(isVisible: boolean): void {
    this.isVisible = isVisible;
  }

  /**
   * Updates the visibility state of a specific skill.
   *
   * @param {number} index - The index of the skill in the list.
   * @param {boolean} isVisible - Whether the skill is visible.
   */
  onSkillVisibilityChange(index: number, isVisible: boolean): void {
    this.skills[index].isVisible = isVisible;
  }

  /**
   * Custom track function for *ngFor to improve rendering performance.
   *
   * @param {number} index - The index of the skill in the list.
   * @returns {number} - The index, used as a unique identifier.
   */
  trackByIndex(index: number): number {
    return index;
  }
}
