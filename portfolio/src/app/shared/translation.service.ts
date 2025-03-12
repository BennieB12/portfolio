import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  changeLanguage(language: string): void {
    this.translate.use(language);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }
}
