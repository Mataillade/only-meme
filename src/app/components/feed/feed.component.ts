import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {

  @Input() roundedBottom: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute){
  }
   goToDetail () {
      this.router.navigate(['home', 'detail', 1]);
   }
}
