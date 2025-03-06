import { Component } from '@angular/core';
import { ProjectComponent } from "../projects/project/project.component";
import { CommonModule} from '@angular/common';

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
  imports: [ProjectComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      imageSrc: 'assets/img/project_1.png',
      imageAlt: 'Project 1',
      title: 'JOIN',
      subtitle: 'JavaScript | HTML | CSS | Firebase',
      description: 'Task manager, inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categorys.',
      btngit: 'Github',
      btntest: 'View project',
      gitLink: 'https://github.com/BennieB12',
      testLink: 'https://Benjamin-Kloss.de'
    },
    {
      imageSrc: 'assets/img/project_2.png',
      imageAlt: 'Project 2',
      title: 'El Pollo Loco',
      subtitle: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      btngit: 'Github',
      btntest: 'View project',
      gitLink: 'https://github.com/BennieB12',
      testLink: 'https://Benjamin-Kloss.de'
    },
    {
      imageSrc: 'assets/img/project_3.png',
      imageAlt: 'Project 3',
      title: 'Pokédex',
      subtitle: 'JavaScript | HTML | CSS | API',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      btngit: 'Github',
      btntest: 'View project',
      gitLink: 'https://github.com/BennieB12',
      testLink: 'https://Benjamin-Kloss.de'
    }
  ];
}
