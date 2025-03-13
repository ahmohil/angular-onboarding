import { 
  Component, 
  OnInit, 
  ViewChild, 
  ViewContainerRef, 
  ComponentFactoryResolver,
  ComponentRef
} from '@angular/core';
import { DynamicContentComponent } from '../dynamic-content/dynamic-content.component';

@Component({
  selector: 'app-view-container-ref-demo',
  templateUrl: './view-container-ref-demo.component.html',
  styleUrls: ['./view-container-ref-demo.component.scss']
})
export class ViewContainerRefDemoComponent implements OnInit {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) 
  container: ViewContainerRef;
  
  componentRefs: ComponentRef<DynamicContentComponent>[] = [];
  counter = 0;
  
  colors = [
    '#ffcdd2', '#f8bbd0', '#e1bee7', '#d1c4e9', 
    '#c5cae9', '#bbdefb', '#b3e5fc', '#b2ebf2', 
    '#b2dfdb', '#c8e6c9', '#dcedc8', '#f0f4c3',
    '#fff9c4', '#ffecb3', '#ffe0b2', '#ffccbc'
  ];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  createComponent(): void {
    if (!this.container) return;
    
    // Create a component factory
    const factory = this.componentFactoryResolver.resolveComponentFactory(DynamicContentComponent);
    
    // Generate a random message and color
    const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    const data = {
      message: `I'm component #${this.counter + 1}, created dynamically!`,
      color: randomColor
    };
    
    // Create the component
    const componentRef = this.container.createComponent<DynamicContentComponent>(factory);
    
    // Set input properties
    componentRef.instance.data = data;
    componentRef.instance.index = ++this.counter;
    
    // Store a reference to the component
    this.componentRefs.push(componentRef);
  }

  removeLastComponent(): void {
    if (this.componentRefs.length > 0) {
      const componentRef = this.componentRefs.pop();
      componentRef.destroy();
    }
  }

  removeAllComponents(): void {
    this.container.clear();
    this.componentRefs = [];
  }
  
  insertComponentAtBeginning(): void {
    if (!this.container) return;
    
    const factory = this.componentFactoryResolver.resolveComponentFactory(DynamicContentComponent);
    
    // Generate a random message and color
    const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    const data = {
      message: `I'm inserted at the beginning (index: ${this.counter + 1})`,
      color: randomColor
    };
    
    // Create the component at index 0
    const componentRef = this.container.createComponent<DynamicContentComponent>(
      factory, 
      0 // insert at the beginning
    );
    
    // Set input properties
    componentRef.instance.data = data;
    componentRef.instance.index = ++this.counter;
    
    this.componentRefs.unshift(componentRef);
  }
}
