import { Component, OnInit } from '@angular/core';
import { Task } from './Task';

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
arr:Task[]=[
  new Task(1,'email to manager','pending'),
  new Task(2,'push to github','pending'),
  new Task(3,'go to movie','done')
]

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
  constructor() { }

  ngOnInit() {
  }

}
