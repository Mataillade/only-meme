import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
   inDetail: boolean = false;

   constructor(private router: Router, private route: ActivatedRoute) {
      router.events.subscribe((val) => {
        if(val instanceof NavigationEnd){
          this.inDetail = val.url.includes('detail');
        }
      });

   }

}
