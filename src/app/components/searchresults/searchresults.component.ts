import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent {
  @Input() showSearchResults: boolean | undefined
  @Output() showImage: EventEmitter<any> = new EventEmitter<any>();
  @Input() searchResults: any[] = [];

  showResults() {
    return this.searchResults.length > 0 && this.showSearchResults;
  }
}
