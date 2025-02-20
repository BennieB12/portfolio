import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AtfComponent } from './atf/atf.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { EllipseComponent } from './ellipse/ellipse.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AtfComponent,
    HeaderComponent,
    IntroComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    EllipseComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';


  ellipse = [
    { width: '892px', height: '892px', top: '-79px', left: '-199px',zIndex: 3 },
    { width: '206px', height: '206px', top: '90%', left: '700px', zIndex: -1 },
    { width: '82px', height: '82px', top: '936px', left: '1034px',zIndex: -1 },
  ];
}
