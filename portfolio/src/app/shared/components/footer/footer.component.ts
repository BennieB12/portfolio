import { Component } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { fontWeightAnimation } from '../../../animations/animations';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollToDirective } from '../../../main-content/directives/scrollto.directive';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, RouterLink, CommonModule, TranslateModule, RouterLink, ScrollToDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  animations: [fontWeightAnimation],
})
export class FooterComponent {
  hoverState: boolean = false;
  fontWeightState: string = 'normal';
  
  /**
   * Toggles the hover state and sets the font weight based on the hover state.
   *
   * @param {boolean} state - The new hover state, indicating whether the mouse is over the element or not.
   * @returns {void} - No return value.
   */
  toggleHover(state: boolean) {
    this.hoverState = state;
    this.fontWeightState = state ? 'bold' : 'normal';
  }
}
