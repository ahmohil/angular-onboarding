import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewChildDemoComponent } from './view-child-demo/view-child-demo.component';
import { ContentChildDemoComponent } from './content-child-demo/content-child-demo.component';

const routes: Routes = [
  { path: '', redirectTo: '/view-child-demo', pathMatch: 'full' },
  { path: 'view-child-demo', component: ViewChildDemoComponent },
  { path: 'content-child-demo', component: ContentChildDemoComponent },
  { path: '**', redirectTo: '/view-child-demo' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
