import { Component, Input, HostListener} from '@angular/core';
import { NgIf, NgClass } from '@angular/common'; 
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-project',
  standalone: true,
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  imports: [NgIf, NgClass, CommonModule],
    animations: [
      trigger('slideInLeft', [
        state('hidden', style({ opacity: 0, transform: 'translateX(-160px)' })),
        state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
        transition('hidden <=> visible', animate('400ms ease-out')) 
      ])
    ]
})
export class ProjectComponent {
  isVisible = false;

  @Input() imageSrc: string = '';
  @Input() imageAlt: string = 'Project Image';
  @Input() title: string = 'Project Title';
  @Input() subtitle: string = 'Project Subtitle';
  @Input() description: string = 'Project description goes here.';
  @Input() btngit: string = 'Github';
  @Input() btntest: string = 'View Project';
  @Input() gitLink: string = '';
  @Input() testLink: string = '';
  @Input() index: number = 0;

  isMiddleProject(index: number): boolean {
    return index % 2 !== 0;
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
