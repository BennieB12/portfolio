import { Component, AfterViewInit} from '@angular/core';
import { ScrollToDirective } from '../directives/scrollto.directive';
import { CommonModule } from '@angular/common';
import { ScrollVisibilityDirective } from '.././directives/scroll-visibility.directive';
import { slideInLeft, fadeIn, buttonScaleAnimation } from '../../animations/animations';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule, ScrollVisibilityDirective, TranslateModule, ScrollToDirective],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
  animations: [slideInLeft, fadeIn, buttonScaleAnimation]
})
/**
 * Represents the introduction section of the application.
 * Handles smooth scrolling, visibility changes, and touch interactions for intro icons.
 */
export class IntroComponent implements AfterViewInit {
  constructor() {}

  /** Tracks the visibility state of the component. */
  isVisible = false;
  isHovered = false;

  /**
   * Lifecycle hook called after the component's view has been fully initialized.
   * 
   * Sets up touch interaction handlers for icon image wrappers to simulate hover behavior
   * on mobile/touch devices by temporarily switching the image to a "hover" version.
   */
  ngAfterViewInit(): void {
    const wrappers = document.querySelectorAll('.image-wrapper, .image-wrapper2, .image-wrapper3');
    
    wrappers.forEach((wrapper: any) => {
      wrapper.addEventListener('touchstart', () => {
        const defaultImg = wrapper.querySelector('.default');
        const hoverImg = wrapper.querySelector('.hover');

        if (defaultImg && hoverImg) {
          defaultImg.style.opacity = '0';
          hoverImg.style.opacity = '1';

          setTimeout(() => {
            defaultImg.style.opacity = '1';
            hoverImg.style.opacity = '0';
          }, 300);
        }
      });
    });
  }

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
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

