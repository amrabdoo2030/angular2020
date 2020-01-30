import { Component, OnInit } from '@angular/core';
import { AllProductService } from 'src/app/all-product.service';

@Component({
  selector: 'app-labtop-component',
  templateUrl: './labtop-component.component.html',
  styleUrls: ['./labtop-component.component.css']
})
export class LabtopComponentComponent implements OnInit {
  public productlist=[];
  constructor(private GitProduct:AllProductService) { }



  ngOnInit() {
    this.GitProduct.getlabtop().subscribe(data=>this.productlist=data)
  }

}
