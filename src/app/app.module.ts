import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from "./components/product-list/product-list.component";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { HeaderComponent } from './components/header/header.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './pages/login/login.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { CustomProductComponent } from './pages/custom-product/custom-product.component';
import { ParticlesComponent } from './components/subComponents/particles/particles.component';
import { SplineviewerdirectiveComponent } from './components/splineviewerdirective/splineviewerdirective.component';
import { EarthComponent } from './components/subComponents/earth/earth.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RatingStarsComponent } from './components/subComponents/rating-stars/rating-stars.component';
import { LogoComponent } from './components/subComponents/logo/logo.component';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { PriceComponent } from './components/subComponents/price/price.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    AddProductComponent,
    EditProductComponent,
    MarketplaceComponent,
    AboutComponent,
    HomeComponent,
    HeroComponent,
    HeaderComponent,
    LoginComponent,
    NewProductComponent,
    CustomProductComponent,
    ParticlesComponent,
    SplineviewerdirectiveComponent,
    SplineviewerdirectiveComponent,
    EarthComponent,
    LoginFormComponent,
    RatingStarsComponent,
    LogoComponent,
    LanguageSwitcherComponent,
    PriceComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line

})
export class AppModule { }
