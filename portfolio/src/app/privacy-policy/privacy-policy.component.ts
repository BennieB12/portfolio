import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollToDirective } from '../main-content/directives/scrollto.directive';


@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule, NgFor, RouterLink, ScrollToDirective],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
}
