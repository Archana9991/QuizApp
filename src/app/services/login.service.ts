import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  public loginfromDB(user : User) : Observable<any>{
  return this.http.post<any>("http://localhost:8080/users",user)
  }
}
