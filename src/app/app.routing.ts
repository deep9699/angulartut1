import { Routes,RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component';
import { TodoComponent } from './todo/todo.component';
import { EdittodoComponent } from './todo/edittodo/edittodo.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';

const arr:Routes=[
 {path:'',component:StudentComponent},
 {path:'product',component:ProductComponent},
 {path:'todo',component:TodoComponent},
 {path:'edittodo/:id',component:EdittodoComponent},
 {path:'editproduct/:id',component:EditproductComponent}   
];

export const routing=RouterModule.forRoot(arr);