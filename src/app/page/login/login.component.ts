import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/authentification/auth.service";
import {CookieService} from "../../service/cookie/cookie.service";
import {Router} from "@angular/router";

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
      email: ['', [Validators.required, Validators.email]],
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
        (response) => {
          console.log(response);
          this.cookieService.setCookie('user', email);
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
          this.cookieService.setCookie('user', email);
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
}
