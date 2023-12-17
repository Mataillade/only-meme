import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {AuthService} from "../../service/authentification/auth.service";
import {CookieService} from "../../service/cookie/cookie.service";
import {Router} from "@angular/router";


function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailRegex.test(control.value);
    return isValid ? null : { 'invalidEmail': true };
  };
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  authService: AuthService;
  cookieService: CookieService;
  constructor(private fb: FormBuilder, authService: AuthService, cookieService: CookieService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required]]
    });
    this.authService = authService;
    this.cookieService = cookieService;
  }
  login() {
    if (this.loginForm && this.loginForm.get('email') && this.loginForm.get('password')) {
      // @ts-ignore
      const email = this.loginForm.get('email').value;
      // @ts-ignore
      const password = this.loginForm.get('password').value;

      this.authService.login(email, password).subscribe(
        (response: any) => {
          console.log(response);
          this.cookieService.setCookie('user', response.access_token);
          this.router.navigate(['/home']);
        },
        (error) => {
          console.log(error);
        }
      )

      console.log('Email:', email);
      console.log('Password:', password);
    }
  }

  signup() {
    if (this.loginForm && this.loginForm.get('email') && this.loginForm.get('password')) {
      // @ts-ignore
      const email = this.loginForm.get('email').value;
      // @ts-ignore
      const password = this.loginForm.get('password').value;

      this.authService.register(email, password).subscribe(
        (response) => {
          console.log(response);
          this.login();
        },
        (error) => {
          console.log(error);
        }
      )

      console.log('Email:', email);
      console.log('Password:', password);
    }
  }
}
