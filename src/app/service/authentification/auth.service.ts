import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:8000/api/user";

  constructor(private http: HttpClient) { }
  login(email: string, password: string) {
    return this.http.post(this.url + '/login', {"username": email, "password": password});
  }

  register(email: string, password: string) {
    return this.http.post(this.url + '/register', {"username": email, "password": password});
  }

  me(token: string) {
    return this.http.get(this.url + '/me', {headers: {"Authorization": "Bearer " + token}});
  }
}
