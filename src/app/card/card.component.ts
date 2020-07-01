import { Component, OnInit, Input } from '@angular/core';

enum CardType {
  lifestyle = 'Lifestyle',
  rig = 'Rig'
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardType: string;

  type: string;

  constructor() { }

  ngOnInit(): void {
    this.type = CardType[this.cardType];
  }

}
