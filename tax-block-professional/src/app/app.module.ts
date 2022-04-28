import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { HomeComponent } from './main-page/home/home.component';
import { ServicesComponent } from './main-page/services/services.component';
import { ServiceComponent } from './main-page/services/service/service.component';
import { AdditionalServicesComponent } from './main-page/services/additional-services/additional-services.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './main-page/navbar/navbar.component';
import { ArticleComponent } from './article/article.component';
import {HttpClientModule} from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ServiceDetailComponent,
    HomeComponent,
    ServicesComponent,
    ServiceComponent,
    AdditionalServicesComponent,
    ContactComponent,
    NavbarComponent,
    ArticleComponent,
    ModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
