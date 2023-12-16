import { Component } from '@angular/core';

@Component({
  selector: 'app-search-meme',
  templateUrl: './search-meme.component.html',
  styleUrls: ['./search-meme.component.css']
})
export class SearchMemeComponent {
  showSearchBar = true;
  showSearchResults = false;
  showImageViewer = false;
  searchText = '';
  searchResults = [
    {imageUrl: "assets/img.png"},
  ];
  selectedImage = {

  };

  performSearch(searchText: string) {
    this.showSearchResults = true;
  }

  showImage(image: any) {
    // Afficher l'image sélectionnée
    this.selectedImage = image;
    this.showSearchBar = false;
    this.showSearchResults = false;
    this.showImageViewer = true;
  }

  closeImageViewer() {
    // Fermer l'image sélectionnée et revenir à la recherche
    this.selectedImage = {};
    this.showImageViewer = false;
    this.showSearchBar = true;
  }
}
