import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';

export const routes: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'updateProfile', component: UpdateProfileComponent}
];
