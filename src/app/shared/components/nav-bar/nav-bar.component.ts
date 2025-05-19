import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GenericButtonComponent } from "../generic-button/generic-button.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, GenericButtonComponent],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  switchLanguage(locale: 'en' | 'es-AR') {
    const baseUrl = window.location.origin;

    const currentPath = window.location.pathname;
    const newUrl = `${baseUrl}/${locale}${currentPath.replace(/^\/(en|es-AR)/, '')}`;

    window.location.href = newUrl;
  }
}