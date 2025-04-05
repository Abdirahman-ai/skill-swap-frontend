import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { SessionListComponent } from './components/session-list/session-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { SkillFormComponent } from './components/skill-form/skill-form.component';
import { SessionFormComponent } from './components/session-form/session-form.component';


export const appRoutes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'users/create', component: UserFormComponent },
  { path: 'skills', component: SkillListComponent },
  { path: 'skills/create', component: SkillFormComponent },
  { path: 'sessions', component: SessionListComponent },
  { path: 'sessions/create', component: SessionFormComponent } // ✅ Add this line
];