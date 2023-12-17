import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }
  login(email: string, password: string) {
    return this.http.post(this.url + '/user/login', {"username": email, "password": password});
  }

}
