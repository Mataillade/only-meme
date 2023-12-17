import {Component, Input} from '@angular/core';
import {UploadService} from "../../service/upload/upload.service";
import {PostService} from "../../service/post/post.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-search-meme',
  templateUrl: './search-meme.component.html',
  styleUrls: ['./search-meme.component.css']
})
export class SearchMemeComponent {
  @Input() formControlName!: FormControl;


  showSearchBar = true;
  showSearchResults = false;
  showImageViewer = false;
  searchText = '';
  searchResults: Array<string>;
  selectedImage = {};
  uploadService: UploadService;

  constructor(uploadService: UploadService,private  postService: PostService){
    this.uploadService = uploadService;
    this.searchResults = [];
  }

  performSearch(searchText: string) {
    this.searchResults = this.uploadService.list();
    this.showSearchResults = true;
  }

  showImage(image: any) {
    // Afficher l'image sélectionnée
    this.postService.setImagePost(image);
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
