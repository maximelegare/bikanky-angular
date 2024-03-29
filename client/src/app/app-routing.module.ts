import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/ui/home.component';
import { StylismServicesComponent } from './stylism-services/stylism-services.component';
import { ProductsComponent } from './products/ui/products.component';
import { ProductComponent } from './product/product.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MaterialsComponent } from './materials/materials.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductsComponent,
    pathMatch:'full', 
  },
  {
    path: 'stylism',
    component: StylismServicesComponent,
    pathMatch:'full', 
  }, 
  {
    path: 'about',
    component: AboutComponent,
    pathMatch:'full', 
  }, 
  {
    path: 'contact',
    component: ContactComponent,
    pathMatch:'full', 
  },
  {
    path: 'materials',
    component: MaterialsComponent,
    pathMatch:'full', 
  },
  {
    path: 'products/:slug',
    component: ProductComponent,
  },
  {
    path: 'products/:slug/:sku',
    component: ProductComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      anchorScrolling:'enabled'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
