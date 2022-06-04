import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component'
import {ServiceDetailComponent} from './service-detail/service-detail.component'
import {ThankYouComponent} from './thank-you/thank-you.component'

const routes: Routes = [
  {path:'service-detail/:code', component: ServiceDetailComponent },
  {path:'', component: MainPageComponent },
  {path:'thank-you', component: ThankYouComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
