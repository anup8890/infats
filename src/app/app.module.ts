import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProductSucessComponent } from './product-sucess/product-sucess.component';
import { ProductRegistrationComponent } from './productRegistration/productRegistration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonService } from './_service/common.service';
import { ProductService } from './_service/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductSucessComponent,
    ProductRegistrationComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'product-sucess', component:ProductSucessComponent},
      {path: 'productRegistration', component:ProductRegistrationComponent},
      {path: '', redirectTo: '/productRegistration', pathMatch: 'full'},
      {path: '**', component:PageNotFoundComponent}
    ]),
    BrowserAnimationsModule,
  ],
  providers: [CommonService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
