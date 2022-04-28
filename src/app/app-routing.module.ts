import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component'
import {ServiceDetailComponent} from './service-detail/service-detail.component'
import {ArticleComponent} from './article/article.component'

const routes: Routes = [
  {path:':serviceName', component: ServiceDetailComponent },
  {path:'', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
