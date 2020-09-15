import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {
  public readonly LOGIN_ROUTE = '/auth/sign-in';
  public readonly DASHBOARD_ROUTE = '/dashboard';

  constructor(private router: Router) { }

  public toLoginPage(): void {
    this.router.navigateByUrl(this.LOGIN_ROUTE);
  }

  public toDashboard(): void {
    this.router.navigateByUrl(this.DASHBOARD_ROUTE);
  }
  
}
