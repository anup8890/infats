import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProductSucessComponent } from 'src/app/product-sucess/product-sucess.component';
import { ProductRegistrationComponent } from 'src/app/productRegistration/productRegistration.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SoapService } from './_service/soap.service';
import { ProductService } from './_service/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductSucessComponent,
    ProductRegistrationComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [CommonService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
