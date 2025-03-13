import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.scss']
})
export class DynamicContentComponent implements OnInit, OnDestroy {
  @Input() data: any;
  @Input() index: number;
  createTime: Date = new Date();

  constructor() { 
    console.log('DynamicContentComponent created');
  }

  ngOnInit(): void {
    console.log(`DynamicContentComponent initialized with data:`, this.data);
  }

  ngOnDestroy(): void {
    console.log(`DynamicContentComponent destroyed: ${this.index}`);
  }
}
