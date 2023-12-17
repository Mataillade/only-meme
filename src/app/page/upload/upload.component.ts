import {Component, Input} from '@angular/core';
import {UploadService} from "../../service/upload/upload.service";
import {CookieService} from "../../service/cookie/cookie.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  uploadService: UploadService;
  selectedFile: File | undefined;
  cookieService: CookieService;
  uploadForm: FormGroup;
  constructor(uploadService: UploadService, cookieService: CookieService, formBuilder: FormBuilder) {
    this.uploadService = uploadService;
    this.cookieService = cookieService;
    this.uploadForm = formBuilder.group({
      fileInput: new FormControl( [])
    });
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onFileDrop(event: any): void {
    console.log('File dropped');
  }

  onDragOver(event: any): void {
    console.log('Drag over');
  }

  uploadFile(): void {
      if (this.selectedFile) {
        let token = this.cookieService.getCookie('user');
        if (token) {
          this.uploadService.upload(this.selectedFile, token).subscribe(
            (response) => {
              console.log('Fichier envoyé !');
              console.log(response);
            },
            (error) => {
              console.log(error);
            }
          );
        } else {
          console.log('Pas de token');
        }
      }
    }
}
