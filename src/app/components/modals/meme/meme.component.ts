import {Component, OnInit} from '@angular/core';
import {MemeModalService} from "../../../service/modal/meme-modal.service";

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit{
  isModalOpen: boolean = false;

  constructor(private memeModalService: MemeModalService) {
  }

  ngOnInit() {
    this.memeModalService.isOpen.subscribe(isOpen => this.isModalOpen = isOpen);
  }

  closeModal() {
    this.memeModalService.closeModal();
  }

}
