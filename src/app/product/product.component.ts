import { Component, OnInit } from '@angular/core';
import { product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  arr:product[]=[
    new product(1,'Mobile',15000,50,'available','../../assets/images/1.png'),
    new product(2,'Tv',50000,5,'available','../../assets/images/1.png'),
    new product(3,'laptop',40000,15,'available','../../assets/images/1.png')
  ]
  q
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
   this.arr.push(new product(this.id1,this.name1,this.price1,this.quantity1,this.sts1))
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
    this.q=parseInt(prompt('pls enter the updates Quantity'));
    if(this.q<=0 || this.q=='ng NaN')
    {
        item.status="unavailable";
        item.quantity=0;
    }
    else
    {
        item.status="available";
        item.quantity=this.q;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
