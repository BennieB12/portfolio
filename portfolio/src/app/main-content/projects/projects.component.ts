import { Component, Input } from '@angular/core';
import { NgIf, NgClass, CommonModule } from '@angular/common';
import { ScrollVisibilityDirective } from '.././directives/scroll-visibility.directive';
import {
  slideInLeft,
  fadeIn,
  hoverAnimation,
} from '../../animations/animations';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Interface representing a project with relevant details.
 */
interface Project {
  imageSrc: string;
  imageAlt: string;
  gitLink: string;
  testLink: string;
}

/**
 * Component for displaying a list of projects with animations and hover effects.
 */
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    ScrollVisibilityDirective,
    NgIf,
    NgClass,
    TranslateModule,
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [slideInLeft, fadeIn, hoverAnimation],
})
export class ProjectsComponent {
  /** Object tracking which projects are currently visible. */
  visibleProjects: { [key: number]: boolean } = {};

  /** Object storing hover states for projects. */
  hoverStates: { [key: number]: 'normal' | 'hover' } = {};

    /** Object storing button states for projects. */
    buttonStates: { [key: number]: 'normal' | 'pressed' } = {};


  /** Image source URL for a project. */
  @Input() imageSrc: string = '';

  /** Alternative text for the project image. */
  @Input() imageAlt: string = '';

  /** GitHub repository link. */
  @Input() gitLink: string = '';

  /** Live test link for the project. */
  @Input() testLink: string = '';

  /** Index of the project in the list. */
  @Input() index: number = 0;

  /** List of projects with their image sources and links. */
  projects: Project[] = [
    {
      imageSrc: 'assets/img/project_1.png',
      imageAlt: 'Project 1',
      gitLink: 'https://github.com/BennieB12/Join/',
      testLink: 'https://Benjamin-Kloss.de/join/public/',
    },
    {
      imageSrc: 'assets/img/project_2.png',
      imageAlt: 'Project 2',
      gitLink: 'https://github.com/BennieB12/polloloco/',
      testLink: 'https://Benjamin-Kloss.de/pollo-loco/',
    },
    {
      imageSrc: 'assets/img/project_3.png',
      imageAlt: 'Project 3',
      gitLink: 'https://github.com/BennieB12',
      testLink: 'https://Benjamin-Kloss.de/pokedex/',
    },
  ];

  /**
   * Determines if the project is in a middle position in the grid layout.
   *
   * @param {number} index - The index of the project.
   * @returns {boolean} - Returns true if the index is an odd number, otherwise false.
   */
  isMiddleProject(index: number): boolean {
    return index % 2 !== 0;
  }

  /**
   * Updates the visibility state of a project when it enters or exits the viewport.
   *
   * @param {number} index - The index of the project.
   * @param {boolean} isVisible - Whether the project is visible or not.
   */
  onVisibilityChange(index: number, isVisible: boolean): void {
    this.visibleProjects[index] = isVisible;
  }

  /**
   * Handles the mouse enter event to apply the hover state.
   *
   * @param {number} index - The index of the hovered project.
   */
  onMouseEnter(index: number): void {
    this.hoverStates[index] = 'hover';
  }

  /**
   * Handles the mouse leave event to remove the hover state.
   *
   * @param {number} index - The index of the unhovered project.
   */
  onMouseLeave(index: number): void {
    this.hoverStates[index] = 'normal';
  }

   /**
   * Handles the touch event to remove the hover state.
   *
   * @param {number} index - The index of the unhovered project.
   */
  setupTouchHandlers(index: number): void {
    this.hoverStates[index] = 'hover';
    setTimeout(() => {
      this.hoverStates[index] = 'normal';
    }, 500);
  }
}
