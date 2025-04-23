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

  @Input() targetRoute?: string;


  private router = inject(Router);

  @HostListener('click')
async onClick(): Promise<void> {
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const element = document.getElementById(this.scrollTargetId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  };

  if (this.targetRoute && this.router.url !== this.targetRoute) {
    await this.router.navigateByUrl(this.targetRoute);
    setTimeout(scroll, 100);
  } else {
    scroll();
  }

  if (window.innerWidth < 768 && this.closeMenuFn) {
    this.closeMenuFn();
  }
}

}