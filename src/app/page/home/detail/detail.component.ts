import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../service/post/post.service";
import {PostType} from "../../../types/post/post.types";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {CookieService} from "../../../service/cookie/cookie.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{

    post: PostType = {} as PostType;
    id: string | null = "";
    constructor(private postService: PostService,
                private route: ActivatedRoute,
                private cookieService: CookieService,
                ) { }
    private imagePostSubscription: Subscription = {} as Subscription;
    imagePost: string = "";


    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');

      this.postService.getOne(this.id).subscribe((post: PostType) => {
        this.post = post;
      });

      this.imagePostSubscription = this.postService.imagePost$.subscribe(
        (imagePost: string) => {
          this.imagePost = imagePost;
        }
      );
    }

    postResponse() {
      const token = this.cookieService.getCookie('user');
      console.log("je suis dans meme", token);
      if (token) {
        console.log("je suis dans meme 2");
        this.postService.postResponse(this.imagePost, this.id, token).subscribe(
          () => {
            this.postService.getOne(this.id).subscribe((post: PostType) => {
              this.post = post;
            });
            this.postService.setImagePost("");
          }
        );
      }

    }

}
