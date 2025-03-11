import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtfComponent } from './atf/atf.component';
import { EllipseComponent } from './ellipse/ellipse.component';
import { IntroComponent } from './intro/intro.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactComponent } from './contact/contact.component';
import { ScrollVisibilityDirective } from './scroll-visibility.directive';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    AtfComponent,
    EllipseComponent,
    IntroComponent,
    SkillsComponent,
    ProjectsComponent,
    CommentsComponent,
    ContactComponent,
    ScrollVisibilityDirective
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {

  ellipse = [
    {
      width: '892px',
      height: '892px',
      top: '-79px',
      left: '-199px',
      zIndex: 3,
    },
    { width: '206px', height: '206px', top: '90%', left: '700px', zIndex: -1 },
    { width: '82px', height: '82px', top: '936px', left: '1034px', zIndex: -1 },
    { width: '108.75001525878906px', height: '108.75001525878906px', top: '2290px', left: '540px',zIndex: -1 },
    { width: '183px', height: '183px', top: '2515px', left: '1134px', zIndex: -1 },
    { width: '393.32px', height: '393.32px', top: '3000px', left: '1124px', zIndex: -1 },
    { width: '393.3196119958484px', height: '393.3196119958484px', top: '2700px', left: '-194px', zIndex: -1 },
  ];
}
