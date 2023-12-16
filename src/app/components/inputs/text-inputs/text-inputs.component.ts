import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-text-inputs',
  templateUrl: './text-inputs.component.html',
  styleUrls: ['./text-inputs.component.css']
})
export class TextInputsComponent {
  @Input() type!: string;
  @Input() formControlName: string = "";
  @Input() placeholder: string = "";
  @Input() id: string = "";
}
