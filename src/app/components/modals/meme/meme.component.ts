import {Component, OnInit} from '@angular/core';
import {MemeModalService} from "../../../service/modal/meme-modal.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../../service/post/post.service";
import {Subscription} from "rxjs";
import {CookieService} from "../../../service/cookie/cookie.service";

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit{
  isModalOpen: boolean = false;
  postForm: FormGroup;
  private imagePostSubscription: Subscription = {} as Subscription;
  imagePost: string = "";


  constructor(
    private memeModalService: MemeModalService,
    private formBuilder: FormBuilder,
    private postService: PostService,
    private cookieService: CookieService){
    this.postForm = this.formBuilder.group({
      content: new FormControl('', Validators.required),
    });
    this.postService = postService;
  }


  post() {
    if(this.postForm.value.content !== '') {
      let token: any = this.cookieService.getCookie('user');
      console.log("je suis dans meme", token);
      if(token) {
        this.postService.post(this.postForm.value.content,this.imagePost, token).subscribe(
          () => {
            this.postForm.reset();
            this.closeModal();
            this.postService.getAll().subscribe();
          }
        );
      } else {
        console.log('Pas de token');
      }
    }
  }

  ngOnInit() {
    this.memeModalService.isOpen.subscribe(isOpen => this.isModalOpen = isOpen);
    this.imagePostSubscription = this.postService.imagePost$.subscribe(
      (imagePost: string) => {
        this.imagePost = imagePost;
      }
    );

  }

  closeModal() {
    this.memeModalService.closeModal();

  }

}
