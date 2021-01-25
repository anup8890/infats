import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductSucessComponent } from 'src/app/product-sucess/product-sucess.component';
import { ProductRegistrationComponent } from 'src/app/productRegistration/productRegistration.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';

const routes: Routes = [
 {path: 'productRegistration', component:ProductRegistrationComponent},
      {path: 'product-sucess', component:ProductSucessComponent},
      {path: '',component:AppComponent},
      {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
