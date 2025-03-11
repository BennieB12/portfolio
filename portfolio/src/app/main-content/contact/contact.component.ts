import { Component } from '@angular/core';
import { ScrollVisibilityDirective } from '.././scroll-visibility.directive';
import { slideInLeft, slideInRight, fadeIn } from '../../animations';


@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  imports: [ScrollVisibilityDirective],
  animations: [slideInLeft, slideInRight, fadeIn]
})
export class ContactComponent {
  isVisible = false;

  onVisibilityChange(isVisible: boolean) {
    this.isVisible = isVisible;
  }
}
