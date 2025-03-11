import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollVisibilityDirective } from '.././scroll-visibility.directive';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule, ScrollVisibilityDirective],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
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
