import { Routes,RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component';
import { TodoComponent } from './todo/todo.component';

const arr:Routes=[
 {path:'',component:StudentComponent},
 {path:'product',component:ProductComponent},
 {path:'todo',component:TodoComponent}   
];

export const routing=RouterModule.forRoot(arr);