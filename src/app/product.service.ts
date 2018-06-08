import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { product } from './product/product';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url='http://localhost:3000/product/';
  constructor(private _http:HttpClient) { }
  getAllProduct(){
    return this._http.get(this.url);
  }
  addProduct(item:product){
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.url,body,{headers:_abc});

  }
  deleteProduct(item:product){
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+item.p_id,{headers:_abc});
  }
}
