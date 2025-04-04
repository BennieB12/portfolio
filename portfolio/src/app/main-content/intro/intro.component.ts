import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollVisibilityDirective } from '.././directives/scroll-visibility.directive';
import { slideInLeft, fadeIn } from '../../animations/animations';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule, ScrollVisibilityDirective, TranslateModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
  animations: [slideInLeft, fadeIn]
})
/**
 * Represents the introduction section of the application.
 * Handles smooth scrolling and visibility changes.
 */
export class IntroComponent {
  /** Tracks the visibility state of the component. */
  isVisible = false;

  /**
   * Smoothly scrolls the page to a specified section by its ID.
   * 
   * @param {string} id - The ID of the target section.
   */
  scrollToSection(id: string): void {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  }

  /**
   * Updates the visibility state of the component.
   * 
   * @param {boolean} isVisible - Whether the component is currently visible.
   */
  onVisibilityChange(isVisible: boolean): void {
    this.isVisible = isVisible;
  }
}

