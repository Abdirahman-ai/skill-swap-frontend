import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private apiUrl = 'http://localhost:8080/api/skills';

  constructor(private http: HttpClient) {}

  getAllSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.apiUrl);
  }

  createSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(this.apiUrl, skill);
  }

  getSkillById(id: string): Observable<Skill> {
    return this.http.get<Skill>(`${this.apiUrl}/${id}`);
  }

  deleteSkill(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

