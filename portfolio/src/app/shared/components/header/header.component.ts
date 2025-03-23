import { Component } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { fontWeightAnimation } from '../../../animations/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [fontWeightAnimation],
})
export class HeaderComponent {
  hoverState: string = 'normal';
  fontWeightState: string = 'normal';
  hoveredIndex: number | null = null;

  constructor(private translationService: TranslationService) {}

  /**
   * Scrolls to a specific section on the page identified by the provided ID.
   * This method performs a smooth scroll to the target element.
   *
   * @param {string} id - The ID of the target element to scroll to.
   * @returns {void} - No return value.
   */
  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /**
   * Switches the application's language by invoking the `changeLanguage` method from the TranslationService.
   *
   * @param {string} language - The language code to switch to (e.g., 'en', 'de').
   * @returns {void} - No return value.
   */
  switchLanguage(language: string): void {
    this.translationService.changeLanguage(language);
  }

  /**
   * Retrieves the current language used by the application.
   * This value is fetched from the TranslationService.
   *
   * @returns {string} - The current language code (e.g., 'en', 'de').
   */
  get currentLanguage(): string {
    return this.translationService.getCurrentLanguage();
  }

  /**
   * Toggles the hover state for an element, affecting both its hover style and font weight.
   * Optionally, it sets the hovered index for further styling or functionality.
   *
   * @param {boolean} state - The new hover state, indicating whether the mouse is over the element.
   * @param {number} [index] - The optional index to store when the element is hovered. Defaults to `null` if not provided.
   * @returns {void} - No return value.
   */
  toggleHover(state: boolean, index?: number) {
    this.hoverState = state ? 'hover' : 'normal';
    this.fontWeightState = state ? 'bold' : 'normal';
    this.hoveredIndex = state ? index ?? null : null;
  }
}
