import { Component } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { fontWeightAnimation } from '../../../animations/animations';
import { Router } from '@angular/router';

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
  menuOpen = false;


  constructor(private translationService: TranslationService, private router: Router) {}

  /**
   * Scrolls to a specific section on the page identified by the provided ID.
   * This method performs a smooth scroll to the target element.
   *
   * @param {string} id - The ID of the target element to scroll to.
   * @returns {void} - No return value.
   */
  scrollToSection(id: string) {
    if (this.router.url !== '/') {
      this.router.navigateByUrl('/').then(() => {
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      });
    } else {  
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    }
  
    if (window.innerWidth < 768) {
      this.toggleMenu();
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
    if (window.innerWidth < 768) {
      this.toggleMenu();
    }
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

/**
 * Toggles the menu open or closed and updates related UI elements.
 *    * @returns {void} - No return value.
 */
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.toggleBurgerMenu();
    this.toggleBodyClass();
    this.toggleLogo();
  }
  
  /**
 * Toggles the burger menu's "open" class based on the menu state.
 */
  private toggleBurgerMenu(): void {
    const burgerMenu = document.querySelector('.burger-menu');
    if (burgerMenu) {
      burgerMenu.classList.toggle('open', this.menuOpen);
    }
  }
  
  /**
 * Adds or removes the "menu-open" class on the body based on the menu state.
 */
  private toggleBodyClass(): void {
    document.body.classList.toggle('menu-open', this.menuOpen);
  }
  
  /**
 * Inverts or resets the logo depending on the menu state.
 */
  private toggleLogo(): void {
    this.menuOpen ? this.invertLogo() : this.resetLogo();
  }

  /**
   * Inverts the color of the logo image by applying a CSS filter.
   * This is typically used when the menu is opened to maintain contrast.
   *
   * @returns {void} - No return value.
   */
  invertLogo(): void {
    const logoImage = document.getElementById('logo');
    if (logoImage) {
      logoImage.style.filter = 'invert(1)';
    }
  }

  /**
   * Resets the logo image to its original color by removing the applied CSS filter.
   * This is typically used when the menu is closed.
   *
   * @returns {void} - No return value.
   */
  resetLogo(): void {
    const logoImage = document.getElementById('logo');
    if (logoImage) {
      logoImage.style.filter = '';
    }
  }
  
}
