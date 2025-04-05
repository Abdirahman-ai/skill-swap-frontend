import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,         // For <router-outlet>
    RouterLink,           // For routerLink in <a> tags
    RouterLinkActive      // For styling the active route
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {}
