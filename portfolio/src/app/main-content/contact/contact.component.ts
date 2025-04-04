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

/**
 * Manages a contact form with validation, email submission, and UI feedback.
 */
export class ContactComponent {
  isVisible = false;
  messageSent = false;
  privacyError = false;
  contactForm: FormGroup;

  /**
   * Initializes the contact form with validation rules.
   * @param {FormBuilder} fb - FormBuilder instance for creating reactive forms.
   * @param {EmailService} emailService - Service responsible for sending emails.
   */
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

  /**
   * Updates the visibility state of the component.
   * @param {boolean} isVisible - Whether the component should be visible.
   */
  onVisibilityChange(isVisible: boolean) {
    this.isVisible = isVisible;
  }

  /**
   * Submits the contact form if it is valid and sends the form data via email.
   * Prevents multiple submissions and resets the form after a successful send.
   */
  onSubmit() {
    if (this.contactForm.valid && !this.messageSent) {
      this.messageSent = true;

      this.emailService.sendEmail(this.contactForm.value).subscribe({
        next: (response) => {
          this.messageSent = true;
          this.contactForm.reset();

          setTimeout(() => {
            this.messageSent = false;
          }, 3000);
        },
        error: (error) => {
          this.messageSent = false;
        },
      });
    }
  }

  /**
   * Highlights invalid form fields by adding a CSS class.
   * The highlight is removed automatically after a short delay.
   */
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

  /**
   * Removes all error highlights from the form fields.
   */
  removeHighlights() {
    document.querySelectorAll('.highlight-error').forEach((element) => {
      element.classList.remove('highlight-error');
    });
  }

  /**
   * Highlights the privacy checkbox by adding a CSS class.
   */
  highlightPrivacyCheckbox() {
    const privacyCheckbox = document.getElementById('privacy-checkbox');
    if (privacyCheckbox) {
      privacyCheckbox.classList.add('highlight-blue');
    }
  }

  /**
   * Removes the highlight from the privacy checkbox.
   */
  removePrivacyHighlight() {
    const privacyCheckbox = document.getElementById('privacy-checkbox');
    if (privacyCheckbox) {
      privacyCheckbox.classList.remove('highlight-blue');
    }
  }

  /**
   * Scrolls to a specific section on the page identified by the provided ID.
   * This method performs a smooth scroll to the target element.
   *
   * @param {string} id - The ID of the target element to scroll to.
   * @returns {void} - No return value.
   */
  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
