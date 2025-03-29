import { Component, HostListener } from '@angular/core';
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
    { id: 0, top: '-93px', left: '-193px', zIndex: 103 },
    // { id: 1, top: '85vh', left: '40vw', zIndex: -1 },
    // { id: 2, top: '60vh', left: '75vw', zIndex: -1 },
    // { id: 3, top: '120vh', left: '30vw', zIndex: -1 },
    // { id: 4, top: '200vh', left: '-10vw', zIndex: -1 },
  ];

  ngOnInit() {
    setTimeout(() => {
      this.animationState = 'end';
    }, 100);
  }
}