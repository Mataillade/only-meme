import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.css']
})
export class TagInputComponent {
  textArray: string[] = [];

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === ' ') {
      event.preventDefault(); // Prevent space from being added to the input
      const inputValue = (event.target as HTMLInputElement).value.trim();
      if (inputValue) {
        this.textArray.push(inputValue);
        (event.target as HTMLInputElement).value = ''; // Clear the input after adding to the array
      }
    }
  }

  removeText(index: number): void {
    this.textArray.splice(index, 1);
  }
}
