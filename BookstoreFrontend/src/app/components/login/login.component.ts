import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    Username: null, 
    email : null,
    password: null
  };    
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  

  constructor(
    private loginService: LoginService,     
    private router: Router
  ) { }
  
  ngOnInit(): void {}

  login(f:NgForm){
    
    const { Username, email, password } = this.form;
    this.loginService.login(Username, email, password).subscribe(
        data =>{
          console.log(data.token)
        if(data.error) { 
          console.log('Login Failed:Username or Password are wrong')
          alert('Login Failed')
          this.isLoginFailed = true;
          this.router.navigateByUrl('login');
         
        }
        else{          
          this.loginService.saveToken(data.token); 
          //this.loginService.savelogin(data.Username); 
          this.isLoginFailed = false;
          this.isLoggedIn = true;   
          this.router.navigateByUrl('books');   
          console.log(data.token)
        }        
        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
    );

  } 

}
