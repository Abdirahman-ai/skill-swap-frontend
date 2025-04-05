import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillService } from '../../services/skill.service';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-skill-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-list.component.html'
})
export class SkillListComponent implements OnInit {
  skills: Skill[] = [];
  isLoading = true;

  constructor(private skillService: SkillService) {}

  ngOnInit(): void {
    this.skillService.getAllSkills().subscribe({
      next: (data) => {
        this.skills = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load skills:', err);
        this.isLoading = false;
      }
    });
  }
}
