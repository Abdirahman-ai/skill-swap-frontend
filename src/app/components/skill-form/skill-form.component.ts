import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SkillService } from '../../services/skill.service';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-skill-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skill-form.component.html'
})
export class SkillFormComponent {
  skill: Skill = {
    id: '',
    name: '',
    category: ''
  };

  constructor(
    private skillService: SkillService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  onSubmit(): void {
    this.skillService.createSkill(this.skill).subscribe({
      next: () => {
        this.toastr
          .success('Skill created successfully!')
          .onHidden
          .subscribe(() => {
            this.router.navigate(['/skills']);
          });
      },
      error: (err) => {
        console.error('Failed to create skill:', err);
        this.toastr.error('Failed to create skill.');
      }
    });
  }
}
