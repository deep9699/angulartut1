import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-arrdemo',
  templateUrl: './arrdemo.component.html',
  styleUrls: ['./arrdemo.component.css']
})
export class ArrdemoComponent implements OnInit {

  str:string="jinal shah";
  no1:number=0;
  no2:number=0;
  res:number=0;
  flag:boolean=true;
  arr:string[]=[
    'jinal',
    'deep',
    'meet',
    'purvang'
  ];
  constructor() { }

  onClick(){
    if(this.flag){
      this.flag=false;
    }
    else
    {
      this.flag=true;
    }
  }
  ngOnInit() {
  }
  onAdd(){
    this.res=this.no1+this.no2;
  }
}
