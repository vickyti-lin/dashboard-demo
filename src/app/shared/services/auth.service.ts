import { NavigateService } from './navigate.service';
import { FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authState: any = null;

  constructor(
    private fireAuth: AngularFireAuth,
    private fireStore: AngularFirestore,
    private navigate: NavigateService
  ) {
    this.fireAuth.authState.subscribe((auth => {
      this.authState = auth;
    }));
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('firebaseui::rememberedAccounts'));
    return (user !== null) ? true : false;
  }


  public login(authResult: FirebaseUISignInSuccessWithAuthResult): void {

    const user = authResult.authResult.user;
    this.authState = user;
    this.setUserData(user);
    localStorage.setItem('firebaseui::rememberedAccounts', JSON.stringify(user));
    this.navigate.toDashboard();
}

  public signOut(): void {
    this.fireAuth.signOut();
    localStorage.removeItem('firebaseui::rememberedAccounts');
    this.navigate.toLoginPage();
  }

  public getByCurrentUser(): void {
    this.fireAuth.onAuthStateChanged(user => {
      if (user && user.uid !== this.authState) {
        this.authState = user;
      } else {
        this.authState = null;
        console.log('no user sign in');
      }
    });
  }

  private setUserData(user): Promise<void>{
    const userRef: AngularFirestoreDocument = this.fireStore.doc(`Person/${user.uid}`);
    const data = {
      objectId: user.uid,
      name: user.displayName,
      phone: user.phoneNumber,
      email: user.email,
    };
    console.log(data, user.uid);
    return userRef.set(data, {merge: true});
  }
}
