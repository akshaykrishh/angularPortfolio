import { Component, OnInit } from '@angular/core';
import { AllContentService } from '../all-content.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  workContent = null;

  constructor(public allContents: AllContentService) {
    this.workContent = allContents.getWorkContent();
  }

  ngOnInit(): void {
  }

}
