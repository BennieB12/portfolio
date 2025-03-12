import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
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
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';

  constructor(private translationService: TranslationService) {}

  useLanguage(language: string): void {
    this.translationService.changeLanguage(language);
  }

  get currentLanguage(): string {
    return this.translationService.getCurrentLanguage();
  }
}
