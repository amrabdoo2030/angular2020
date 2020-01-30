import { Component, OnInit } from '@angular/core';
// import { Router } from "@angular/router";
import { AllProductService } from 'src/app/all-product.service';

@Component({
  selector: 'app-mobile-component',
  templateUrl: './mobile-component.component.html',
  styleUrls: ['./mobile-component.component.css']
})
export class MobileComponentComponent implements OnInit {

  constructor(private GitProduct:AllProductService) { }
  public productlist=[];
  
  ngOnInit() {

this.GitProduct.getmobiles().subscribe(data=>this.productlist=data)
   
  }
  
 
}
