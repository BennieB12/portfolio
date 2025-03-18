import { Component, Input } from '@angular/core';
import { NgIf, NgClass, CommonModule } from '@angular/common';
import { ScrollVisibilityDirective } from '.././directives/scroll-visibility.directive';
import { slideInLeft, slideInRight, fadeIn, hoverAnimation} from '../../animations/animations';
import { TranslateModule } from '@ngx-translate/core';

interface Project {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
  btngit: string;
  btntest: string;
  gitLink: string;
  testLink: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollVisibilityDirective, NgIf, NgClass, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [slideInLeft, slideInRight, fadeIn, hoverAnimation],
})
export class ProjectsComponent {
  visibleProjects: { [key: number]: boolean } = {};
  hoverStates: { [key: number]: 'normal' | 'hover' } = {};

  @Input() imageSrc: string = '';
  @Input() imageAlt: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() description: string = '.';
  @Input() btngit: string = '';
  @Input() btntest: string = '';
  @Input() gitLink: string = '';
  @Input() testLink: string = '';
  @Input() index: number = 0;

  projects = [
    {
      imageSrc: 'assets/img/project_1.png',
      imageAlt: 'Project 1',
      gitLink: 'https://github.com/BennieB12',
      testLink: 'https://Benjamin-Kloss.de',
    },
    {
      imageSrc: 'assets/img/project_2.png',
      imageAlt: 'Project 2',
      gitLink: 'https://github.com/BennieB12',
      testLink: 'https://Benjamin-Kloss.de',
    },
    {
      imageSrc: 'assets/img/project_3.png',
      imageAlt: 'Project 3',
      gitLink: 'https://github.com/BennieB12',
      testLink: 'https://Benjamin-Kloss.de',
    },
  ];

  isMiddleProject(index: number): boolean {
    return index % 2 !== 0;
  }

  onVisibilityChange(index: number, isVisible: boolean) {
    this.visibleProjects[index] = isVisible;
  }

  onMouseEnter(index: number) {
    this.hoverStates[index] = 'hover';
  }

  onMouseLeave(index: number) {
    this.hoverStates[index] = 'normal';
  }
}
