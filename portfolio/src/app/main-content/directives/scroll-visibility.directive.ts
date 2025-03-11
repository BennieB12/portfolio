import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appScrollVisibility]',
  standalone: true
})
export class ScrollVisibilityDirective {
  @Output() isVisibleChange = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 100;
    this.isVisibleChange.emit(isVisible);
  }
}
