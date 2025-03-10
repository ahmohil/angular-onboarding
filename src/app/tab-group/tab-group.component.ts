import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements OnInit, AfterContentInit {
  // Using ContentChildren to get all Tab components projected into this component
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    // Set the first tab as active by default if none is already active
    const activeTabs = this.tabs.filter(tab => tab.active);
    if (activeTabs.length === 0 && this.tabs.length > 0) {
      this.selectTab(this.tabs.first);
    }

    console.log('ContentChildren tabs:', this.tabs.toArray());
  }

  selectTab(tab: TabComponent): void {
    // Deactivate all tabs
    this.tabs.forEach(t => t.active = false);
    
    // Activate the selected tab
    tab.active = true;
  }
}
