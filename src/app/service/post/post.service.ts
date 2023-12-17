import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = "http://localhost:8000/api/post";
  constructor(private http: HttpClient) { }

  post(title: string, content: string, token: string) {
    return this.http.post(this.url, {"title": title, "content": content}, {headers: {"Authorization": "Bearer " + token}});
  }
}
