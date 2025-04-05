import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,         // For <router-outlet>
    RouterLink,           // For routerLink in <a> tags
    RouterLinkActive,      // For styling the active route
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {}
