import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
     imageUrl: 'assets/tree.jpeg',
     username: 'nature',
     content: 'I saw this neat tree today'
    },
    {
      title: 'Snowy Mountain',
     imageUrl: 'assets/mountain.jpeg',
     username: 'mountainlover',
     content: 'Here is a pocture of mountain'
    },
    {
      title: 'Mountain Biking',
     imageUrl: 'assets/biking.jpeg',
     username: 'biking122',
     content: 'I did some biking today'
    }
  ];

  //pipes
  name = '';
  date = '';
  amount = 0;
  height = 0;
  miles = 0;

  car = {
    a: 'a',
    b: 'b'
  }

  onNameChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.name = target.value;
  }

  onDateChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.date = target.value;
  }

  onAmountChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.amount = parseFloat(target.value);
  }

  onHeightChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.height = parseFloat(target.value);
  }

  onMilesChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.miles = parseFloat(target.value);
  }
}
