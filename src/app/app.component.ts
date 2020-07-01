import { Component, OnInit } from '@angular/core';

enum CardType {
  'single' = 1,
  'multi' = 2,
  'nothing' = 3
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cardType: string;

  ngOnInit(): void {
    const cardNbr = Math.floor(Math.random() * 3) + 1;
    this.cardType = CardType[cardNbr];
  }

}
