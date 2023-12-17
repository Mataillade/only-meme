import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subscription} from "rxjs";
import {PostService} from "../../service/post/post.service";

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit{
  @Input() showImageViewer: boolean|undefined;
  @Input() selectedImage: any; // Remplacez par vos données d'image sélectionnée
  @Output() closeImageViewer: EventEmitter<void> = new EventEmitter<void>();
  private imagePostSubscription: Subscription = {} as Subscription;
  imagePost: string = "";

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.imagePostSubscription = this.postService.imagePost$.subscribe(
      (imagePost: string) => {
        this.imagePost = imagePost;
      }
    );

  }
}
