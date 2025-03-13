import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewChildDemoComponent } from './view-child-demo/view-child-demo.component';
import { ContentChildDemoComponent } from './content-child-demo/content-child-demo.component';
import { TemplateRefDemoComponent } from './template-ref-demo/template-ref-demo.component';
import { ViewContainerRefDemoComponent } from './view-container-ref-demo/view-container-ref-demo.component';

const routes: Routes = [
  { path: '', redirectTo: '/view-child-demo', pathMatch: 'full' },
  { path: 'view-child-demo', component: ViewChildDemoComponent },
  { path: 'content-child-demo', component: ContentChildDemoComponent },
  { path: 'template-ref-demo', component: TemplateRefDemoComponent },
  { path: 'view-container-ref-demo', component: ViewContainerRefDemoComponent },
  { path: '**', redirectTo: '/view-child-demo' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
