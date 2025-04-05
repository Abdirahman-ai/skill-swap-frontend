import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { SessionListComponent } from './components/session-list/session-list.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'skills', component: SkillListComponent },
  { path: 'sessions', component: SessionListComponent }
];
