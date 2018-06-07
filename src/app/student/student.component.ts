import { Component, OnInit } from '@angular/core';
import { stu } from './stu';
import { StudentService  } from '../student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
arr:stu[]=[];
d:number=0;
flag:boolean;
id:number;
name:string;
per:number;
res:string;
e;
flaga:boolean;
flagu:boolean;
onDel()
{
  this.d=parseInt(prompt('pls enter index of list of student (0 based index)'));
  
  this.arr.splice(this.d,1);
}
onUp()
{
  
  this.e=prompt('pls enter index of student')
  if(this.e==null)
  {
    this.flag=false;
  }
  else
  {
    this.flag=true;
    this.flaga=false;
    this.flagu=true;
    if(this.e!=NaN)
    {
      this.d=parseInt(this.e);
      this.id=this.arr[this.d].id;
      this.name=this.arr[this.d].name;
      this.per=this.arr[this.d].percentage;
      this.res=this.arr[this.d].result;
    } 
  }
}
onclickUp()
{
  this.flaga=false;
  this.arr[this.d].id=this.id;
  this.arr[this.d].name=this.name;
  this.arr[this.d].percentage=this.per;
  if(this.per>=35)
  {
    this.arr[this.d].result='pass';
  }
  else
  {
    this.arr[this.d].result='fail';
  }
  this.flag=false;
  this.flagu=false;
  
}

onclickAdd()
{
  this.flagu=false;
  if(this.per>=35)
  {
    this.res='pass';
  }
  else
  {
    this.res='fail';
  }
  this.arr.push(new stu(this.id,this.name,this.per,this.res));
  this.flag=false;
  this.flaga=false;
}
onAdd()
{
  this.flagu=false;
  if(this.flag)
  {
    this.flag=false;
    this.flaga=false;
  }
  else
  {
    this.flag=true;
    this.flaga=true;
  }
}
  constructor(private _xyz:StudentService) { }

  ngOnInit() {
    this._xyz.getAllStudent().subscribe(
      (data:stu[])=>{
        this.arr=data;
        console.log(this.arr);
      }
    );
  }

}
