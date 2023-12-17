import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private url = "http://localhost:8000/api";
  constructor(private http: HttpClient) { }

  upload(file: File, token: string) {
    let formData = new FormData();
    formData.append('file', file);
    return this.http.post(this.url + "/post/upload", formData, {headers: {"Authorization": "Bearer " + token}});
  }

  list() {
    const listMedia: Array<string> = []
    this.http.get(this.url + "/post/media").subscribe((data: any) => {
      for (let i = 0; i < data.length; i++) {
        listMedia.push("http://localhost:8000" + data[i]);
      }
    });
    return listMedia;
  }

}
