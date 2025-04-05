import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionService } from '../../services/session.service';
import { Session } from '../../models/session.model';

@Component({
  selector: 'app-session-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnInit {
  sessions: Session[] = [];
  isLoading = true;

  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    this.sessionService.getAllSessions().subscribe({
      next: (data) => {
        this.sessions = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load sessions:', err);
        this.isLoading = false;
      }
    });
  }
}
