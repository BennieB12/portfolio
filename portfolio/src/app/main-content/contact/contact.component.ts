import { Component, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate, sequence } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [
    trigger('slideInLeft', [
      state('hidden', style({ opacity: 0, transform: 'translateX(-160px)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', animate('400ms ease-out'))
    ]),
    trigger('slideInRight', [
      state('hidden', style({ opacity: 0, transform: 'translateX(160px)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', animate('400ms 200ms ease-out'))
    ]),
    trigger('fadeIn', [
      state('hidden', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('hidden => visible', animate('400ms 400ms ease-out')) 
    ])
  ]
})
export class ContactComponent {
  isVisible = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const element = document.getElementById('contact');
    if (element) {
      const rect = element.getBoundingClientRect();
      this.isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 100;
    }
  }
}
