import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  onFileChange(event: any): void {
    // Logique pour gérer le changement de fichier
    console.log(event.target.files);
  }

  onFileDrop(event: any): void {
    event.preventDefault();
    this.handleFileDrop(event.dataTransfer.files);
  }

  onDragOver(event: any): void {
    event.preventDefault();
  }

  handleFileDrop(files: FileList): void {
    // Logique pour gérer le fichier déposé
    console.log(files);
  }

  uploadFile(): void {
    // Logique pour gérer l'envoi du fichier
    console.log('Fichier envoyé !');
  }
}
