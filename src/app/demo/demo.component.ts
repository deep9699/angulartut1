import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  res:string="";
  x:string="";
  flag:boolean=false;
  no1:number;
  no2:number;
  f:number;
  ans:number;
  y="";
  str:string="priyen";

  
  constructor() { }
  
  onClickeq(){

    this.no2=parseInt(this.y);
    if(this.f==1){
      this.ans=this.no1+this.no2;
      this.y=this.ans+"";
    }
  }
  onClickplus(){
    this.no1=parseInt
    (this.y);
    this.y="";
    this.f=1;
  }

  ngOnInit() {
  }
  onClick1(){
    this.y+="1";
  }
  onClick2(){
    this.y+="2";
  }
  onClickOnOff(){
    if(this.flag){
      this.flag=false;
    }
    else{
      this.flag=true;
    }
  }
  onClickButton(){
    this.x="deep bhavsar";
  }
  onClick(str:string){
this.res=str;
  }
}
