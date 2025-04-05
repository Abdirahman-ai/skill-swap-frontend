import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-form',
  standalone: true,
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class UserFormComponent {
  user: User = {
    id: '',
    username: '',
    email: '',
    bio: '',
    location: '',
    rating: 0,
    role: 'USER'
  };

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  onSubmit(): void {
    this.userService.createUser(this.user).subscribe({
      next: () => {
        this.toastr
          .success('User created successfully!')
          .onHidden
          .subscribe(() => {
            this.router.navigate(['/users']);
          });
      },
      error: (err) => {
        console.error('Failed to create user:', err);
        this.toastr.error('Failed to create user.');
      }
    });  
  }  
}
