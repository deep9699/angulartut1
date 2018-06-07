import { Component, OnInit } from '@angular/core';
import { Task } from './Task';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit { 

  statusarr:string[]=[
    'done',
    'pending'
  ];
arr:Task[]=[];

onAdd(x,y,z){
this.arr.push(new Task(x,y,z));
}
  onDelete(i){

    this.arr.splice(i,1);
    //this.arr.splice(this.arr.indexOf(item),1);
  }
  onUpdate(item:Task){
    if(item.Status=='done'){
      item.Status='pending';
    }
    else{
      item.Status='done';
    }
  }
  constructor(private _xyz:TodoService) { }

  ngOnInit() {

    this._xyz.getAllTask().subscribe(
      (data:Task[])=>{
        this.arr=data;
      }
    );
  }

}
