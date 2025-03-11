import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ScrollVisibilityDirective } from '.././directives/scroll-visibility.directive';
import { slideInLeft, slideInRight, fadeIn } from '../../animations/animations';
import { EmailService } from '../../../app/services/mail-service'; 

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  imports: [ScrollVisibilityDirective, ReactiveFormsModule, NgIf],
  animations: [slideInLeft, slideInRight, fadeIn]
})
export class ContactComponent {
  isVisible = false;
  messageSent = false;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      mail: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      privacy: [false, Validators.requiredTrue]
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
          console.log("E-Mail erfolgreich gesendet:", response);
          this.messageSent = true;
          this.contactForm.reset();
        },
        error: (error) => {
          console.error("Fehler beim Senden der E-Mail:", error);
          this.messageSent = false;
        }
      });
    }
  }
  
}
