import {Component, OnInit} from '@angular/core';
import {MemeModalService} from "../../../service/modal/meme-modal.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {PostService} from "../../../service/post/post.service";

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit{
  isModalOpen: boolean = false;
  postForm: FormGroup;
  postService: PostService;

  constructor(private memeModalService: MemeModalService, private formBuilder: FormBuilder, postService: PostService) {
    this.postForm = this.formBuilder.group({
      fileInput: new FormControl(),
      content: new FormControl('')
    });
    this.postService = postService;
  }

  post() {
    if(this.postForm.value.content !== '') {
      let token = localStorage.getItem('user');
      if(token) {
        this.postService.post(this.postForm.value.content,this.postForm.value.fileInput, token).subscribe(
          (response) => {
            console.log('Post envoyé !');
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

  ngOnInit() {
    this.memeModalService.isOpen.subscribe(isOpen => this.isModalOpen = isOpen);
  }

  closeModal() {
    this.memeModalService.closeModal();
  }

}
