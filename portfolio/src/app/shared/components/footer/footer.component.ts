import { Component } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule,RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
}
