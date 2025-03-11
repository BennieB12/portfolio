import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { slideInFromBottom, fadeIn } from '../../animations'; 
import { ScrollVisibilityDirective } from '../scroll-visibility.directive'; 

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, ScrollVisibilityDirective],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  animations: [slideInFromBottom, fadeIn]
})
export class CommentsComponent {
  isVisible = false;

  onVisibilityChange(isVisible: boolean) {
    this.isVisible = isVisible;
  }
}
