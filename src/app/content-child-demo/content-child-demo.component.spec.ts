import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildDemoComponent } from './content-child-demo.component';

describe('ContentChildDemoComponent', () => {
  let component: ContentChildDemoComponent;
  let fixture: ComponentFixture<ContentChildDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentChildDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentChildDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
