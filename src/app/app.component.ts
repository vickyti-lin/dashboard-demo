import { NavigateService } from './shared/services/navigate.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private navigate: NavigateService){
    }

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.navigate.toDashboard();
    } else {
      this.navigate.toLoginPage();
    }
  }
}

