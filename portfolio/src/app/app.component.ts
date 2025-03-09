import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TranslateModule } from "@ngx-translate/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    TranslateModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';

  // constructor(private translate: TranslateService) {
  //   this.translate.addLangs(['de', 'en']);
  //   this.translate.setDefaultLang('en');
  //   this.translate.use('en');
  // }

  //  useLanguage(event: Event, language: string): void {
  //   event.preventDefault();
  //   this.translate.use(language);
  // }

  // get currentLanguage(): string {
  //   return this.translate.currentLang;
  // }
}
