import { Component, OnInit } from '@angular/core';
import { AllProductService } from '../all-product.service';

@Component({
  selector: 'app-camera-component',
  templateUrl: './camera-component.component.html',
  styleUrls: ['./camera-component.component.css']
})
export class CameraComponentComponent implements OnInit {
  public productlist=[];
  
  constructor(private GitProduct:AllProductService) { }
  


  ngOnInit() {

   this.GitProduct.getcamera().subscribe(data=>this.productlist=data);
  }

}
