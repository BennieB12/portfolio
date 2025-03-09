import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
  animations: [
    trigger('slideInLeft', [
      state('hidden', style({ opacity: 0, transform: 'translateX(-160px)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden <=> visible', animate('400ms ease-out')) 
    ])
  ]
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

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const element = document.getElementById('intro');
    if (element) {
      const rect = element.getBoundingClientRect();
      this.isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 100;
    }
  }
  
}
