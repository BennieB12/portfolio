import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollVisibilityDirective } from '.././directives/scroll-visibility.directive';
import { slideInLeft, slideInRight, fadeIn } from '../../animations/animations';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule, ScrollVisibilityDirective, TranslateModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
  animations: [slideInLeft, slideInRight, fadeIn]
})
export class IntroComponent {
  isVisible = false;

  imageMap: Record<string, { default: string; hover: string }> = {
    location: { default: 'assets/img/location.png', hover: 'assets/img/location-hover.png' },
    remote: { default: 'assets/img/remote.png', hover: 'assets/img/remote-hover.png' },
    move: { default: 'assets/img/move.png', hover: 'assets/img/move-hover.png' }
  };

  currentImages: Record<string, string> = {
    location: this.imageMap['location'].default,
    remote: this.imageMap['remote'].default,
    move: this.imageMap['move'].default
  };

  hoverImage(icon: string, hover: boolean) {
    if (this.imageMap[icon]) {
      this.currentImages[icon] = hover ? this.imageMap[icon].hover : this.imageMap[icon].default;
    }
  }

  onVisibilityChange(isVisible: boolean) {
    this.isVisible = isVisible;
  }
  
}
