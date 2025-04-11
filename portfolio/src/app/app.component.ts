import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslationService } from './shared/translation.service';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HttpClientModule,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

/**
 * The root component of the application.
 * 
 * This component manages the main structure of the app, including the header, footer,
 * and the ability to switch between languages.
 */
export class AppComponent implements OnInit{
  title = 'portfolio';
  ngOnInit(): void {
    window.onload = () => {
      this.scrollToSection('header');
    };
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }

    /**
   * Creates an instance of the AppComponent and injects the TranslationService.
   * 
   * @param {TranslationService} translationService - The service used for changing and managing the application's language.
   */
  constructor(private translationService: TranslationService) {}


    /**
   * Changes the current language of the application.
   * 
   * This method calls the TranslationService to change the active language based on the provided language code.
   * 
   * @param {string} language - The language code to switch to (e.g., 'en' for English, 'de' for German).
   */
  useLanguage(language: string): void {
    this.translationService.changeLanguage(language);
  }

  /**
   * Retrieves the current language of the application.
   * 
   * @returns {string} - The current language code (e.g., 'en' for English, 'de' for German).
   */
  get currentLanguage(): string {
    return this.translationService.getCurrentLanguage();
  }
}
