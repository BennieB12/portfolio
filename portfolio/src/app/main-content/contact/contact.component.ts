import { Component } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ScrollVisibilityDirective } from '.././directives/scroll-visibility.directive';
import { slideInLeft, fadeIn } from '../../animations/animations';
import { EmailService } from '../../../app/services/mail-service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    ScrollVisibilityDirective,
    ReactiveFormsModule,
    NgIf,
    NgClass,
    TranslateModule,
  ],
  animations: [slideInLeft, fadeIn],
})
export class ContactComponent {
  isVisible = false;
  messageSent = false;
  privacyError = false;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.fb.group({
      name: [
        '',
        [Validators.required, Validators.pattern(/^[A-Za-zÄÖÜäöüß\s]+$/)],
      ],
      mail: ['', [Validators.required, Validators.email]],
      message: [
        '',
        [Validators.required, Validators.pattern(/^[A-Za-zÄÖÜäöüß]{3,}/)],
      ],
      privacy: [false, Validators.requiredTrue],
    });
  }

  onVisibilityChange(isVisible: boolean) {
    this.isVisible = isVisible;
  }

  onSubmit() {
    if (this.contactForm.valid && !this.messageSent) {
      this.messageSent = true;

      this.emailService.sendEmail(this.contactForm.value).subscribe({
        next: (response) => {
          console.log('E-Mail erfolgreich gesendet:', response);
          this.messageSent = true;
          this.contactForm.reset();

          setTimeout(() => {
            this.messageSent = false;
          }, 3000);
        },
        error: (error) => {
          console.log('Fehler beim Senden der E-Mail:', error);
          this.messageSent = false;
        },
      });
    }
  }

  highlightInvalidFields() {
    Object.keys(this.contactForm.controls).forEach((field) => {
      const control = this.contactForm.get(field);
      if (control && control.invalid) {
        const element = document.querySelector(`[formControlName="${field}"]`);
        if (element) {
          element.classList.add('highlight-error');
          setTimeout(() => element.classList.remove('highlight-error'), 500);
        }
        const privacyCheckbox = document.getElementById('privacy-checkbox');
        if (this.contactForm.get('privacy')?.invalid && privacyCheckbox) {
          privacyCheckbox.classList.add('highlight-error');
          setTimeout(
            () => privacyCheckbox.classList.remove('highlight-error'),
            1500
          );
        }
      }
    });
  }

  removeHighlights() {
    document.querySelectorAll(".highlight-error").forEach((element) => {
      element.classList.remove("highlight-error");
    });
  }

  highlightPrivacyCheckbox() {
    const privacyCheckbox = document.getElementById('privacy-checkbox');
    if (privacyCheckbox) {
      privacyCheckbox.classList.add('highlight-blue');
    }
  }
  
  removePrivacyHighlight() {
    const privacyCheckbox = document.getElementById('privacy-checkbox');
    if (privacyCheckbox) {
      privacyCheckbox.classList.remove('highlight-blue');
    }
  }

}
