import { Component, OnInit, ViewChild, AfterViewInit, ContentChild, ContentChildren } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
  selector: 'app-content-child-demo',
  templateUrl: './content-child-demo.component.html',
  styleUrls: ['./content-child-demo.component.scss']
})
export class ContentChildDemoComponent implements OnInit {
  // We'll reference these via a @ViewChild in real implementation
  selectedTabIndex = 0;
  isDynamicContentShown = false;
  dynamicTabTitle = 'Dynamic Tab';

  constructor() { }

  ngOnInit(): void {
  }
  
  toggleDynamicTab(): void {
    this.isDynamicContentShown = !this.isDynamicContentShown;
  }
  
  changeDynamicTabTitle(): void {
    this.dynamicTabTitle = `Dynamic Tab (${new Date().toLocaleTimeString()})`;
  }
}
