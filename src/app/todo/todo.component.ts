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

this._xyz.addTask(new Task(x,y,z)).subscribe(
  (data:any)=>{
    console.log(data);
    this.arr.push(new Task(x,y,z));
  }
);

}
  onDelete(i){

    this._xyz.deleteTask(i).subscribe(
      (data:any)=>{
        this.arr.splice(this.arr.indexOf(i),1);
      }
    );
    // this.arr.splice(i,1);
    
  }
  onUpdate(item:Task){
    
    this._xyz.updateTask(item).subscribe(
      (data:any)=>{
        if(item.Status=='done'){
          item.Status='pending';
        }
        else{
          item.Status='done';
        }    
      }
    )

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
