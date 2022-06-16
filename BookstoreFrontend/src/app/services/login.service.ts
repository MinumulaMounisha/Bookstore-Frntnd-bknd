import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})

export class LoginService {

  constructor(private http: HttpClient) { }

  login(Username: string, email: string, password: string): Observable<any> {
    const url =  environment.basePath + '/register/login';    
    return this.http.post(url, {
      Username,
      email,
      password
    }, httpOptions);
  }

  LogOut(): void {
    sessionStorage.clear();
  }

  saveToken(token: string){
    sessionStorage.removeItem("token");
    sessionStorage.setItem("token", token);
  }

  getToken() {
    return sessionStorage.getItem("token");
  }
 
  getlogin(){
    return sessionStorage.getItem("Username");
  }

  savelogin(username:string){
    sessionStorage.removeItem("Username");
    sessionStorage.setItem('Username',username);
    console.log(username)
  }

  deleteToken(){
    sessionStorage.removeItem("token");
  }

  isAuth(){
    if (this.getToken())
     return true;
    else 
     return false;
  }

}
