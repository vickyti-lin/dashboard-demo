import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  errorMessage: FirebaseUISignInFailure;
  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
  }

  successLogin(authResult: FirebaseUISignInSuccessWithAuthResult): void {
    console.log('success', authResult);
    this.authService.login(authResult);
  }

  errorCallback(error: FirebaseUISignInFailure) {
    console.warn('error:', error);
    this.errorMessage = error;
  }

}
