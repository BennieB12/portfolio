import { Component } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { fontWeightAnimation} from '../../../animations/animations';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule,RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  animations: [fontWeightAnimation]
})
export class FooterComponent {

  hoverState: boolean = false;
  fontWeightState: string = 'normal';

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleHover(state: boolean) {
    this.hoverState = state;
    this.fontWeightState = state ? 'bold' : 'normal';
  }
}
