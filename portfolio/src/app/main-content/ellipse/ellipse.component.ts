import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ellipse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ellipse.component.html',
  styleUrls: ['./ellipse.component.scss']
})
export class EllipseComponent {
  @Input() ellipse: { width: string; height: string; top: string; left?: string; zIndex?: number }[] = [];
}
