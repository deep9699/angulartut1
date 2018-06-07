import { Component, OnInit } from '@angular/core';
import { product } from './product';
import { ProductService } from '../product.service';

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
  //  this.arr.push(new product(this.id1,this.name1,this.price1,this.quantity1,this.sts1))
   this.flag=false;
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
    // this.q=parseInt(prompt('pls enter the updates Quantity'));
    // if(this.q<=0 || this.q=='NaN')
    // {
    //     item.status="unavailable";
    //     item.quantity=0;
    // }
    // else
    // {
    //     item.status="available";
    //     item.quantity=this.q;
    // }
  }
  constructor(private _xyz:ProductService) { }

  ngOnInit() {
    this._xyz.getAllProduct().subscribe(
      (data:product[])=>{
        this.arr=data
        console.log(this.arr);
        
      }
    );
  }

}
