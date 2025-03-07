import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  animations: [
    trigger('slideInFromBottom', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(50px) scale(0.5)',
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0) scale(1)',
      })),
      transition('hidden <=> visible', animate('400ms ease-out'))
    ])
  ]
})
export class CommentsComponent {
  isVisible = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const element = document.getElementById('comments');
    if (element) {
      const rect = element.getBoundingClientRect();
      this.isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 100;
    }
  }
}
