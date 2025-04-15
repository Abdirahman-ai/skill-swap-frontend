import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { SessionListComponent } from './components/session-list/session-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { SkillFormComponent } from './components/skill-form/skill-form.component';
import { SessionFormComponent } from './components/session-form/session-form.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard'; 

export const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  // 🔐 Protected routes
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'users/create', component: UserFormComponent, canActivate: [AuthGuard] },
  { path: 'skills', component: SkillListComponent, canActivate: [AuthGuard] },
  { path: 'skills/create', component: SkillFormComponent, canActivate: [AuthGuard] },
  { path: 'sessions', component: SessionListComponent, canActivate: [AuthGuard] },
  { path: 'sessions/create', component: SessionFormComponent, canActivate: [AuthGuard] },

  { path: '', redirectTo: 'users', pathMatch: 'full' }
];
