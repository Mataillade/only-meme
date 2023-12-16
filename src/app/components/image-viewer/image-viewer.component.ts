import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent {
  @Input() showImageViewer: boolean|undefined;
  @Input() selectedImage: any; // Remplacez par vos données d'image sélectionnée
  @Output() closeImageViewer: EventEmitter<void> = new EventEmitter<void>();
}
