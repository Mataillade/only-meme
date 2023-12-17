import { Component } from '@angular/core';
import {CookieService} from "../../service/cookie/cookie.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  name : string;

  constructor(cookieService: CookieService) {
    let cookieName = cookieService.getCookie("user");
    if (cookieName == null) {
      this.name = "Anonymous";
    } else {
      this.name = cookieName;
    }
  }
}
