import { Component } from '@angular/core';
import {MemeModalService} from "../../../service/modal/meme-modal.service";

@Component({
  selector: 'app-meme-button',
  templateUrl: './meme-button.component.html',
  styleUrls: ['./meme-button.component.css']
})
export class MemeButtonComponent {

  constructor(private memeModalService: MemeModalService) {

  }
  openModal() {
    this.memeModalService.openModal();
  }

}
