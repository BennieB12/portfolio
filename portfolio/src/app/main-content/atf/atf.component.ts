import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { fadeIn} from '../../animations/animations';


@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss',
  animations: [fadeIn]
})
/**
 * Represents the ATF (Above the Fold) component.
 * This component manages animations for profile image and section visibility.
 */
export class AtfComponent {
  /** State of the profile image animation ('hidden' or 'visible'). */
  profImgState = 'hidden';

  /** State of the section animation ('hidden' or 'visible'). */
  sectionState = 'hidden';

  /**
   * Lifecycle hook that is called after Angular initializes the component.
   * Delays the visibility of the profile image and section to create an animation effect.
   */
  ngOnInit(): void {
    setTimeout(() => {
      this.profImgState = 'visible';
    }, 2000);

    setTimeout(() => {
      this.sectionState = 'visible';
    }, 1200);
  }
}
