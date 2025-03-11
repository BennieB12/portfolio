import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ScrollVisibilityDirective } from '.././directives/scroll-visibility.directive';
import { slideInLeft, slideInRight, fadeIn } from '../../animations/animations';

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
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
    window.location.reload();
  }
}
