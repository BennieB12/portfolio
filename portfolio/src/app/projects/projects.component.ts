import { Component } from '@angular/core';
import { ProjectComponent } from "../projects/project/project.component";
import { CommonModule } from '@angular/common';

interface Project {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      imageSrc: 'assets/img/project1.png',
      imageAlt: 'JOIN',
      title: 'JOIN',
      subtitle: 'JavaScript | HTML | CSS | Firebase',
      description: 'Task manager, inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categorys.',
      buttonText: 'Github'
    },
    {
      imageSrc: 'assets/img/project2.jpg',
      imageAlt: 'Project 2',
      title: 'Project Two',
      subtitle: 'App Design',
      description: 'An innovative mobile app that I designed and built.',
      buttonText: 'See Project'
    },
    {
      imageSrc: 'assets/img/project3.jpg',
      imageAlt: 'Project 3',
      title: 'Project Three',
      subtitle: 'Graphic Design',
      description: 'A collection of branding and design projects I worked on.',
      buttonText: 'View Work'
    }
  ];
}
