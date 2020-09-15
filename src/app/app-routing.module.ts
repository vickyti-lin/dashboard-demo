import { AuthGuard } from './shared/guard/auth.guard';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { AuthComponent } from './pages/auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth/sign-in' },
  { path: 'auth', component: AuthComponent, children: [
    { path: 'sign-in', component: SignInComponent }
  ]},
  { path: 'dashboard', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
