import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { CalcComponent } from './calc/calc.component';
import { ArrdemoComponent } from './arrdemo/arrdemo.component';
import { TodoComponent } from './todo/todo.component';
import { ProductComponent } from './product/product.component';
import { XyzComponent } from './xyz/xyz.component';
import { BootstrapdemoComponent } from './bootstrapdemo/bootstrapdemo.component';
import { StudentComponent } from './student/student.component';
import { HeaderComponent } from './header.component';
import { EdittodoComponent } from './todo/edittodo/edittodo.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    CalcComponent,
    ArrdemoComponent,
    TodoComponent,
    ProductComponent,
    StudentComponent,
    XyzComponent,
    BootstrapdemoComponent,
    HeaderComponent,
    EdittodoComponent,
    EditproductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
