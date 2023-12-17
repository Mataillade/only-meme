import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = "http://localhost:8000/api/post";
  constructor(private http: HttpClient) { }

  post(content: string, mediaUrl: string, token: string) {
    return this.http.post(this.url, {"content": content, "media_url": mediaUrl}, {headers: {"Authorization": "Bearer " + token}});
  }
}
