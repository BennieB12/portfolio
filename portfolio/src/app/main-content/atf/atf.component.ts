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
export class AtfComponent {

  profImgState = 'hidden';
  sectionState = 'hidden';

  ngOnInit() {
    setTimeout(() => {
      this.profImgState = 'visible';
    }, 2000);
    setTimeout(() => {
      this.sectionState = 'visible';
    }, 1200);
  }
 }

