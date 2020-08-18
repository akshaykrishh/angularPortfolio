import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css']
})
export class CardContentComponent implements OnInit {
  @Input() header = 'Not Found';
  @Input() headerLink = 'Not Found';
  @Input() img = 'Not Found';
  @Input() imgLink = 'Not Found';
  @Input() lastUpdated = 'Not Found';
  @Input() content = 'Not Found';
  @Input() button = 'Not Found';
  @Input() buttonOnClick = 'Not Found';
  constructor() { }

  ngOnInit(): void {
  }

  evaluate() {
    eval(this.buttonOnClick);
  }
}
