import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-list-icons',
  templateUrl: './list-icons.component.html',
  styleUrls: ['./list-icons.component.css']
})
export class ListIconsComponent {
  @Input() icon: string = "";
  @Input() alt: string = "";
  @Input() title: string = "";
}
