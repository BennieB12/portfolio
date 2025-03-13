import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { slideInFromBottom, fadeIn } from '../../animations/animations'; 
import { ScrollVisibilityDirective } from '../directives/scroll-visibility.directive';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, ScrollVisibilityDirective, TranslateModule],
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
