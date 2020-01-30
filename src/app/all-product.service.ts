import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IProducts } from "src/app/interfaces/products";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AllProductService {

  constructor(private http :HttpClient) { }
public urlmobiles:string='';
public urlcamera:string='';
public urllabtop:string='';


getcamera():Observable<IProducts[]> {
  return this.http.get<IProducts[]>(this. urlcamera);
  }

  getmobiles():Observable<IProducts[]> {
    return this.http.get<IProducts[]>(this.urlmobiles);
    }
   getlabtop():Observable<IProducts[]> {
      return this.http.get<IProducts[]>(this. urllabtop);
      }
    

}
