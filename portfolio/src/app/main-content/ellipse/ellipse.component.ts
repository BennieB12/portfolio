import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { shrinkAndCircle } from '../../animations/animations';

@Component({
  selector: 'app-ellipse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ellipse.component.html',
  styleUrls: ['./ellipse.component.scss'],
  animations: [shrinkAndCircle], 
})
export class EllipseComponent {
  @Input() ellipse: { width: string; height: string; top: string; left?: string; zIndex?: number }[] = [];

  animationState = 'start';

  ngOnInit() {
    setTimeout(() => {
      this.animationState = 'end';
    }, 100); 
  }
}
