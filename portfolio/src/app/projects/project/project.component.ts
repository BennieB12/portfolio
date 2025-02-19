import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-project',
  standalone: true,
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() imageSrc: string = '';
  @Input() imageAlt: string = 'Project Image';
  @Input() title: string = 'Project Title';
  @Input() subtitle: string = 'Project Subtitle';
  @Input() description: string = 'Project description goes here.';
  @Input() buttonText: string = 'View More';
}
