import { Component } from '@angular/core';
import { ScrollVisibilityDirective } from '.././scroll-visibility.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  imports: [ScrollVisibilityDirective]
})
export class ContactComponent {
  isVisible = false;

  onVisibilityChange(isVisible: boolean) {
    this.isVisible = isVisible;
  }
}
