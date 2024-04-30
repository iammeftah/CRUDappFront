import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./components/product-list/product-list.component";
import {AddProductComponent} from "./components/add-product/add-product.component";
import {EditProductComponent} from "./components/edit-product/edit-product.component";
import {HomeComponent} from "./pages/home/home.component";
import {MarketplaceComponent} from "./pages/marketplace/marketplace.component";
import {AboutComponent} from "./pages/about/about.component";
import {LoginComponent} from "./pages/login/login.component";
import {NewProductComponent} from "./pages/new-product/new-product.component";
import {CustomProductComponent} from "./pages/custom-product/custom-product.component";

const routes: Routes = [

  { path: 'products', component: ProductListComponent },

  { path: 'add-product', component: NewProductComponent },
  { path: 'edit-product/:id', component: CustomProductComponent },


  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },






  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
