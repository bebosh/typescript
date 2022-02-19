import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Type_game';
  randomText = lorem.sentence();
  enteredText = '';

  onInput(value: string) {
    this.enteredText = value;
  }
  compare(randomLetter: string, enteredTextValue: string) {
    if (!enteredTextValue) {
      return 'pending';
    }

    return randomLetter === enteredTextValue ? 'correct' : 'incorrect';
  }
}
