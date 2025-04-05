import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.component.html'
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
