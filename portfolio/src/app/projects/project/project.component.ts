import { Component, Input } from '@angular/core';
import { NgIf, NgClass } from '@angular/common'; 


@Component({
  selector: 'app-project',
  standalone: true,
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  imports: [NgIf, NgClass],
})
export class ProjectComponent {
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
}
