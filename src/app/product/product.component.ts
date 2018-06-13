import { Component, OnInit } from '@angular/core';
import { product } from './product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  arr:product[]=[];
  q;
  flag:boolean=false;
  sta:string[]=[
    'available',
    'unavailable'
  ]

  id1:number;
  name1:string;
  price1:number;
  quantity1:number;
  sts1:string;
  pimg:string;

  onclickAdd()
  {
    if(this.quantity1<=0)
    {
     this.sts1="unavailable"; 
    }
    else
    {
      this.sts1="available";
    }
    this._xyz.addProduct(new product(this.id1,this.name1,this.price1,this.quantity1,this.sts1,this.pimg)).subscribe(
      (data:any)=>{
        this.arr.push(new product(this.id1,this.name1,this.price1,this.quantity1,this.sts1,this.pimg));
      }
    );

  
    
   this.flag=false;
  }

  onDelete(item:product){
this._xyz.deleteProduct(item).subscribe(
  (data:any)=>{
    this.arr.splice(this.arr.indexOf(item),1);
  }
);
  }

  onDel(index)
  {
    this.arr.splice(index,1)
  }
  onAdd()
  {
    if(this.flag)
    {
      this.flag=false;
    }
    else
    {
      this.flag=true;
    }
  }
  onUp(item:product)
  {
    this._route.navigate(['/editproduct',item.p_id]);
  }
  constructor(private _route:Router,private _xyz:ProductService) { }

  ngOnInit() {
    this._xyz.getAllProduct().subscribe(
      (data:product[])=>{
        this.arr=data
        console.log(this.arr);
        
      }
    );
  }

}
