import { Component } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [SkillsComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {

 
}
