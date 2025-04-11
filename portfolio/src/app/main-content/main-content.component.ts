import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtfComponent } from './atf/atf.component';
import { IntroComponent } from './intro/intro.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactComponent } from './contact/contact.component';
import { BlubberComponent } from '../animations/blubber/blubber.component';

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
    BlubberComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent{

}
