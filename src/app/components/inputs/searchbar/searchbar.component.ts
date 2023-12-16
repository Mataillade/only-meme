import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  @Input() showSearchBar: boolean | undefined;
  @Output() performSearch: EventEmitter<string> = new EventEmitter<string>();
  searchText = '';

  onSearch() {
    this.performSearch.emit(this.searchText);
  }
}
