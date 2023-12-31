import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { UserComponent } from './Components/user/user.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AuthGuard } from './Guards/auth.guard';
import { SecureGuard } from './Guards/secure.guard';
import { PanelComponent } from './Components/panel/panel.component';

const routes: Routes = [
  {
    path: 'SignIn',
    component: LoginComponent,
    canActivate: [SecureGuard],
  },
  {
    path: 'SignUp',
    component: RegisterComponent,
    canActivate: [SecureGuard],
  },
  {
    path: 'User',
    component: UserComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['User','Admin'],
    },
  },
  {
    path: 'Admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['Admin'],
    },
  },
  {
    path: 'Panel',
    component: PanelComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['User','Admin'],
    },
  },

  { path: 'Home', component: HomeComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }, // redirect to Home component on root path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
