import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public loginService: LoginService,
    public router: Router
  ) {}
  
  canActivate() {   
    if(this.loginService.getToken() != null){     
        return true;
      }
    else{
        this.router.navigateByUrl('login');
        return false;
    }
  }
  
}


