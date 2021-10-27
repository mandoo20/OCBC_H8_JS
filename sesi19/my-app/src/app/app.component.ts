import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  messageParent = 'Pesan dari Parent Jangan Diabaikan!';
  msg = '';
  //parentInc = '+';
  //parentDec =  '-';
  items = ['sepatu', 'sendal', 'tas']

  people= [
    {
      "name": "Kim Yewon (Umji)",
      "age" : 18,
      "country": 'Incheon'
    },
    {
      "name": "Lee Jieun (IU)",
      "age" : 20,
      "country": 'Songjeong'
    },
    {
      "name": "Jung Eunbi (Eunha)",
      "age" : 19,
      "country": 'Seoul'
    },
    {
      "name": "Hwang Eunbi (Sinb)",
      "age" : 18,
      "country": 'Cheongju'
    }
  ]

    isItalic = true;
    isBold = true;


  addItemInParent(newItem: string) {
    this.items.push(newItem);
  }

  counter = 0;

  addCounter() {
    this.counter++;
  }

  decCounter() {
    this.counter--;
  }
}
