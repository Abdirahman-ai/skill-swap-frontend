import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from '../models/session.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private apiUrl = 'http://localhost:8080/api/sessions';

  constructor(private http: HttpClient) {}

  getAllSessions(): Observable<Session[]> {
    return this.http.get<Session[]>(this.apiUrl);
  }

  getSessionById(id: string): Observable<Session> {
    return this.http.get<Session>(`${this.apiUrl}/${id}`);
  }

  deleteSession(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  createSession(session: Session): Observable<Session> {
    return this.http.post<Session>(this.apiUrl, session);
  }  
}
