import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
// import { CategoryComponent } from './components/category/category.component';
import { MobileComponentComponent } from "src/app/components/mobile-component/mobile-component.component";
import { CameraComponentComponent } from "src/app/camera-component/camera-component.component";
import { LabtopComponentComponent } from "src/app/components/labtop-component/labtop-component.component";
import { AboutUsComponent } from "src/app/components/component/about-us/about-us.component";
import { MobileDetailsComponent } from "src/app/components/mobile-details/mobile-details.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  // {path:'category',component:CategoryComponent},
  {path:'mobiles',component:MobileComponentComponent},
  {path:'mobiledetails/:id',component:MobileDetailsComponent},
 {path:'labtop',component:LabtopComponentComponent},
 {path:'camera',component:CameraComponentComponent},
  {path:'about',component:AboutUsComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'cart',component:CartComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
