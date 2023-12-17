import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../service/post/post.service";
import {PostType} from "../../../types/post/post.types";

@Component({
  selector: 'app-home-post',
  templateUrl: './home-feed.component.html',
  styleUrls: ['./home-feed.component.css']
})
export class HomeFeedComponent implements OnInit{

    posts: Array<PostType> = [];

    constructor(private postService: PostService,) { }

    ngOnInit(): void {
      this.postService.getAll().subscribe((posts: Array<PostType>) => {
        this.posts = posts;
      });
    }

}
