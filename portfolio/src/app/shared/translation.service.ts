import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * Service for handling language translations in the application.
 * 
 * This service uses the `ngx-translate` library to manage language translations.
 * It allows changing the application's language and retrieving the current language.
 */
@Injectable({
  providedIn: 'root',
})
export class TranslationService {

    /**
   * Creates an instance of the TranslationService and initializes the language settings.
   * 
   * By default, the service adds German ('de') and English ('en') as available languages,
   * sets English ('en') as the default language, and uses English as the active language.
   * 
   * @param {TranslateService} translate - The TranslateService instance used for language handling.
   */
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

    /**
   * Changes the application's language.
   * 
   * This method sets the active language to the provided language code.
   * 
   * @param {string} language - The language code to be set (e.g., 'de' for German, 'en' for English).
   */
  changeLanguage(language: string): void {
    this.translate.use(language);
  }

    /**
   * Retrieves the current active language of the application.
   * 
   * @returns {string} - The current language code (e.g., 'en' for English, 'de' for German).
   */
  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }
}
