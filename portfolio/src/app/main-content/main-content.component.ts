import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtfComponent } from './atf/atf.component';
import { IntroComponent } from './intro/intro.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactComponent } from './contact/contact.component';
import { BlubberComponent } from '../animations/blubber/blubber.component';
import { shrinkAndCircle } from './../animations/animations';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    AtfComponent,
    IntroComponent,
    SkillsComponent,
    ProjectsComponent,
    CommentsComponent,
    ContactComponent,
    BlubberComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
  animations: [shrinkAndCircle]
})
export class MainContentComponent {
  animationState = 'start';

  ellipse = [
    { width: '793px', height: '793px', top: '-10vh', left: '-15vw', zIndex: 3 },
    { width: '15vw', height: '15vw', top: '85vh', left: '40vw', zIndex: -1 },
    { width: '5vw', height: '5vw', top: '60vh', left: '75vw', zIndex: -1 },
    { width: '10vw', height: '10vw', top: '120vh', left: '30vw', zIndex: -1 },
    { width: '25vw', height: '25vw', top: '200vh', left: '-10vw', zIndex: -1 },
  ];

  ngOnInit() {
    setTimeout(() => {
      this.animationState = 'end';
    }, 100);
  }
  
}
