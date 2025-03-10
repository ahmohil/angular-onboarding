import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-view-child-demo',
  templateUrl: './view-child-demo.component.html',
  styleUrls: ['./view-child-demo.component.scss']
})
export class ViewChildDemoComponent implements OnInit, AfterViewInit {
  // Using ViewChild to access the CounterComponent
  // @ViewChild(CounterComponent) counterComponent: CounterComponent;
  @ViewChild('counter') counterComponent: CounterComponent;
  
  // Using ViewChild with ElementRef to access a DOM element
  @ViewChild('title') titleElement: ElementRef;
  
  message: string;

  constructor() { }

  ngOnInit(): void {
    this.message = 'ViewChild demo initialized';
  }

  ngAfterViewInit(): void {
    // We can access the component after view is initialized
    console.log('Counter component reference:', this.counterComponent);
    console.log('Title element reference:', this.titleElement);
    
    // We can change properties of the DOM element
    this.titleElement.nativeElement.style.color = '#0066cc';
  }

  // Methods to control the Counter component
  incrementCounter(): void {
    this.counterComponent.increment();
    this.message = `Counter incremented to: ${this.counterComponent.count}`;
  }

  decrementCounter(): void {
    this.counterComponent.decrement();
    this.message = `Counter decremented to: ${this.counterComponent.count}`;
  }

  resetCounter(): void {
    this.counterComponent.reset();
    this.message = 'Counter reset to 0';
  }

  // Method to demonstrate changing DOM element
  changeTitle(): void {
    this.titleElement.nativeElement.textContent = 'ViewChild - Title Changed!';
    this.titleElement.nativeElement.style.color = '#cc0000';
    this.message = 'Title text and color changed using ViewChild with ElementRef';
  }

  restoreTitle(): void {
    this.titleElement.nativeElement.textContent = 'ViewChild Demo';
    this.titleElement.nativeElement.style.color = '#0066cc';
    this.message = 'Title restored to original';
  }
}
