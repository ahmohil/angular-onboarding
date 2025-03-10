import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewChildDemoComponent } from './view-child-demo/view-child-demo.component';
import { ContentChildDemoComponent } from './content-child-demo/content-child-demo.component';
import { CounterComponent } from './counter/counter.component';
import { TabComponent } from './tab/tab.component';
import { TabGroupComponent } from './tab-group/tab-group.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewChildDemoComponent,
    ContentChildDemoComponent,
    CounterComponent,
    TabComponent,
    TabGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
