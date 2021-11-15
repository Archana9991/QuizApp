// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// const TOKEN_KEY = 'auth-token';
// const USER_KEY = 'auth-user';

// @Injectable({
//   providedIn: 'root'
// })
// export class TokenStorageService {
//   constructor(private http: HttpClient) { }

//   signOut(): void {
//     window.sessionStorage.clear();
//   }

//   public saveToken(token: string): void {
//     window.sessionStorage.removeItem(TOKEN_KEY);
//     window.sessionStorage.setItem(TOKEN_KEY, token);
//   }

//   public getToken(): string | null {
//     return window.sessionStorage.getItem(TOKEN_KEY);
//   }

//   public saveUser(user: any): void {
//     window.sessionStorage.removeItem(USER_KEY);
//     window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
//   }

//   public getUser(){
//   return this.http.get( 'http://localhost:9000/users/');
//   }
  
// }
