import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from '@angular/forms';
// import { CategoryComponent } from './components/category/category.component';
import { MobileComponentComponent } from './components/mobile-component/mobile-component.component';
import { CameraComponentComponent } from './camera-component/camera-component.component';
import { LabtopComponentComponent } from './components/labtop-component/labtop-component.component';
import { AboutUsComponent } from './components/component/about-us/about-us.component';
import { MobileDetailsComponent } from './components/mobile-details/mobile-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    SignupComponent,
    LoginComponent,
    PagenotfoundComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    // CategoryComponent,
    MobileComponentComponent,
    CameraComponentComponent,
    LabtopComponentComponent,
    AboutUsComponent,
    MobileDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
