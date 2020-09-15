# Web-Dashboard

version 0.1.0 ( 2020 / 09 / 07 )

## Description

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) , and use [Firebase CLI](https://github.com/firebase/firebase-tools) Tools be used to test, manage, and deploy .

**Server Framework :** [Angular CLI](https://github.com/angular/angular-cli)   
**Database Service :** [Firebase CLI](https://github.com/firebase/firebase-tools)   
**Cloud Framework :** [Firebase CLI](https://github.com/firebase/firebase-tools) -  Cloud Firestore  
**Main Library :** [FirebaseUI](https://github.com/firebase/firebaseui-web#overwriting-the-sign-in-success-url) . [Ng-zorro](https://ng.ant.design/docs/getting-started/en) . [AngularFire Library](https://github.com/angular/angularfire) . [Bootstrap](https://getbootstrap.com/)

## Getting Start

### Setup Environment
Install [Angular CLI](https://github.com/angular/angular-cli)   
Install [Firebase CLI](https://github.com/firebase/firebase-tools)  

### Install the Angular CLI 
```bash
$ npm install -g @angular/cli
```
### Install the Firebase CLI 
```bash
$ npm install -g firebase-tools
```
### Install all project dependencies.

```bash
$ npm install
```

## Deploy

### Log in and test the Firebase CLI

1. Log into Firebase using your Google account by running the following command:
```bash
$ firebase login
```
2. Test that the CLI is properly installed and accessing your account by listing your Firebase projects. Run the following command:

```bash
$ firebase projects:list
```
The displayed list should be the same as the Firebase projects listed in the [Firebase console](https://console.firebase.google.com).

### Change Firebase SDKs
This config in [environments](./src/environments/environment.ts)
```bash
const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};
```

### Initialize a Firebase project

```bash
$ firebase init
```
The following is an example [firebase.json](./firebase.json) file with default settings if you select Firebase Hosting for Firebase during initialization.

### Deploy to a Firebase project
```bash
$ firebase deploy
```

## Running the Server

```bash
# run project
$ ng serve
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.



## Test

```bash
# unit tests
$ npm run test
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
