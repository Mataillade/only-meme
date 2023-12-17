import { Component } from '@angular/core';
import {CookieService} from "../../service/cookie/cookie.service";
import {AuthService} from "../../service/authentification/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  name : string | undefined;
  authService: AuthService;

  constructor(cookieService: CookieService, authService: AuthService) {
    this.authService = authService;
    let cookieToken = cookieService.getCookie("user");
    if (cookieToken == null) {
      this.name = "Anonymous";
    } else {
      authService.me(cookieToken).subscribe(
        (response: any) => {
          console.log(response);
          this.name = response.username;
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }
}
