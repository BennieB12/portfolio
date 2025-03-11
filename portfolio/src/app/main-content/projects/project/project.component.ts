import { Component, Input} from '@angular/core';
import { NgIf, NgClass, CommonModule} from '@angular/common'; 
import { ScrollVisibilityDirective } from '../.././scroll-visibility.directive';
import { slideInLeft, slideInRight, fadeIn } from '../../../animations';


@Component({
  selector: 'app-project',
  standalone: true,
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  imports: [NgIf, NgClass, CommonModule, ScrollVisibilityDirective],
  animations: [slideInLeft, slideInRight, fadeIn]
})
export class ProjectComponent {
  isVisible = false;

  @Input() imageSrc: string = '';
  @Input() imageAlt: string = 'Project Image';
  @Input() title: string = 'Project Title';
  @Input() subtitle: string = 'Project Subtitle';
  @Input() description: string = 'Project description goes here.';
  @Input() btngit: string = 'Github';
  @Input() btntest: string = 'View Project';
  @Input() gitLink: string = '';
  @Input() testLink: string = '';
  @Input() index: number = 0;

  isMiddleProject(index: number): boolean {
    return index % 2 !== 0;
    }

    onVisibilityChange(isVisible: boolean) {
      this.isVisible = isVisible;
    }
}
