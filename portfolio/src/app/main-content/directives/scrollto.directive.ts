import { Directive, Input, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appScrollTo]',
  standalone: true
})
export class ScrollToDirective {
  /**
   * Das Ziel-Element, zu dem gescrollt werden soll (per ID).
   */
  @Input('appScrollTo') scrollTargetId!: string;

  /**
   * Optional: Funktion zum Schließen des Menüs auf kleinen Bildschirmen.
   */
  @Input() closeMenuFn?: () => void;

  private router = inject(Router);

  @HostListener('click')
  async onClick(): Promise<void> {
    const scroll = () => {
      const element = document.getElementById(this.scrollTargetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if (this.router.url !== '/') {
      await this.router.navigateByUrl('/');
      setTimeout(scroll, 200);
    } else {
      setTimeout(scroll, 50);
    }

    if (window.innerWidth < 768 && this.closeMenuFn) {
      this.closeMenuFn();
    }
  }
}
