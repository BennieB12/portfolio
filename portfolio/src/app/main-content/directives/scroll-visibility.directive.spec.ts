import { ScrollVisibilityDirective } from './scroll-visibility.directive';
import { ElementRef } from '@angular/core';

describe('ScrollVisibilityDirective', () => {


  it('should create an instance', () => {
    const mockElementRef = { nativeElement: {} };
    const directive = new ScrollVisibilityDirective(mockElementRef as ElementRef);
    expect(directive).toBeTruthy();
  });
});