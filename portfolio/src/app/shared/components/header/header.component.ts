import { Component } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { fontWeightAnimation} from '../../../animations/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [ fontWeightAnimation]
})
export class HeaderComponent {

  hoverState: string = 'normal';
  fontWeightState: string = 'normal';
  hoveredIndex: number | null = null; 

  constructor(private translationService: TranslationService) {}

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  switchLanguage(language: string): void {
    this.translationService.changeLanguage(language);
  }

  get currentLanguage(): string {
    return this.translationService.getCurrentLanguage();
  }

  toggleHover(state: boolean, index?: number) {
    this.hoverState = state ? 'hover' : 'normal';
    this.fontWeightState = state ? 'bold' : 'normal';
    this.hoveredIndex = state ? index ?? null : null; 
  }
}
