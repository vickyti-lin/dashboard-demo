import { AuthService } from './../../shared/services/auth.service';
import { NavigateService } from './../../shared/services/navigate.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isCollapsed = false;
  Iamstar = 'Iamstar';
  public menus = [
    {
      level: 1,
      title: 'Home',
      icon: 'home',
      selected: true,
      disabled: false,
      routingPath: this.navigate.DASHBOARD_ROUTE
    },
  ];

  constructor(
    private router: Router,
    private navigate: NavigateService,
    public authService: AuthService) { }

  ngOnInit(): void {
    this.highlightSidebarByURL();
  }

  public onClickSideMenuItem(route: string): void {
    this.router.navigateByUrl(`${route}`);
  }

  public onSignOut(): void {
    console.log('sign out');
    this.authService.signOut();
  }

  private highlightSidebarByURL(): void {
    // TODO Optimize when having submenu (children)
    const currentURL = this.router.url;
    this.menus.forEach((menu) => {
      menu.selected = false;
      if (menu.routingPath === currentURL) {
          menu.selected = true;
        }
      }
    );
  }

}
