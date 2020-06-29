import { Component, OnInit, Input } from '@angular/core';

enum CardType {
  lifestyle = 'Lifestyle',
  rig = 'Rig'
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() cardType: string;

  type: string;

  constructor() { }

  ngOnInit(): void {
    this.type = CardType[this.cardType];
  }

}
