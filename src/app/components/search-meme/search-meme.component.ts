import { Component } from '@angular/core';
import {UploadService} from "../../service/upload/upload.service";

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
  searchResults: Array<string>;
  selectedImage = {};
  uploadService: UploadService;

  constructor(uploadService: UploadService) {
    this.uploadService = uploadService;
    this.searchResults = [];
  }

  performSearch(searchText: string) {
    this.searchResults = this.uploadService.list();
    this.showSearchResults = true;
  }

  showImage(image: any) {
    // Afficher l'image sélectionnée
    console.log(image);
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
