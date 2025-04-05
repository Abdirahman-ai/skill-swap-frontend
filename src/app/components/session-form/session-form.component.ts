import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../../services/session.service';
import { UserService } from '../../services/user.service';
import { SkillService } from '../../services/skill.service';
import { Session } from '../../models/session.model';
import { User } from '../../models/user.model';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-session-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './session-form.component.html'
})
export class SessionFormComponent implements OnInit {
  users: User[] = [];
  skills: Skill[] = [];

  session: Partial<Session> = {
    teacherUsername: '',
    learnerUsername: '',
    skillName: '',
    dateTime: '',
    status: 'PENDING',
    feedback: ''
  };

  constructor(
    private sessionService: SessionService,
    private userService: UserService,
    private skillService: SkillService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data => this.users = data);
    this.skillService.getAllSkills().subscribe(data => this.skills = data);
  }

  onSubmit(): void {
    this.sessionService.createSession(this.session as Session).subscribe({
      next: () => {
        this.toastr.success('Session created successfully!').onHidden.subscribe(() => {
          this.router.navigate(['/sessions']);
        });
      },
      error: (err) => {
        console.error('Failed to create session:', err);
        this.toastr.error('Failed to create session.');
      }
    });
  }
}
