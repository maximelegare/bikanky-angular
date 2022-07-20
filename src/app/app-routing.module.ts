import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/ui/home.component'; 

import { ProductsComponent } from './products/ui/products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:"products",
    component:ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
