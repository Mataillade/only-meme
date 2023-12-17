import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostType} from "../../types/post/post.types";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = "http://localhost:8000/api/post";
  private imagePostSubject = new Subject<string>();
  public imagePost$: Observable<string> = this.imagePostSubject.asObservable();


  constructor(private http: HttpClient) { }


  setImagePost(image: string) {
    this.imagePostSubject.next(image);
  }

  post(content: string, mediaUrl: string, token: string): Observable<PostType> {
    console.log("je suis dans un post ", token);
    return this.http.post<PostType>(this.url, {"content": content, "media_url": mediaUrl}, {headers: {"Authorization": "Bearer " + token}});
  }
  getAll() : Observable<Array<PostType>>{
    return this.http.get<Array<PostType>>(`${this.url}/list`);
  }

  getOne( id: string | null) : Observable<PostType>{
    return this.http.get<PostType>(`${this.url}/${id}`);
  }

  postResponse(mediaUrl: string, id: string | null, token: string )  {
    return this.http.post(`${this.url}/${id}/reply`, {media_url: mediaUrl}, {headers: {"Authorization": "Bearer " + token}});

  }
}
