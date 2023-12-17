import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostType} from "../../types/post/post.types";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {

  @Input() roundedBottom: boolean = true;

  @Input()answer: boolean = false;

  @Input() post!: PostType;

  constructor(private router: Router, private route: ActivatedRoute){
  }
   goToDetail () {
      this.router.navigate(['home', 'detail', this.post.id]);
   }
}
