import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

/**
 * A directive that detects when an element becomes visible or hidden based on scroll position.
 * Emits an event when the visibility status changes.
 */
@Directive({
  selector: '[appScrollVisibility]',
  standalone: true
})
export class ScrollVisibilityDirective {
  /**
   * Emits a boolean value indicating whether the element is visible in the viewport.
   */
  @Output() isVisibleChange = new EventEmitter<boolean>();

  /**
   * Constructs the directive and injects the reference to the host element.
   * @param {ElementRef} el - Reference to the element this directive is attached to.
   */
  constructor(private el: ElementRef) {}

  /**
   * Listens to the window scroll event and checks if the element is within the visible viewport.
   * Emits `true` if the element is visible and `false` if it is not.
   * 
   * The element is considered visible if:
   * - Its top is within the viewport (excluding the top 100 pixels).
   * - Its bottom is still within the viewport (excluding the bottom 100 pixels).
   * 
   * @param {Event} event - The scroll event.
   */
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 100;
    this.isVisibleChange.emit(isVisible);
  }
}
