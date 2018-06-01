import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { CalcComponent } from './calc/calc.component';
import { ArrdemoComponent } from './arrdemo/arrdemo.component';
import { TodoComponent } from './todo/todo.component';
import { ProductComponent } from './product/product.component';
import { XyzComponent } from './xyz/xyz.component';
import { BootstrapdemoComponent } from './bootstrapdemo/bootstrapdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    CalcComponent,
    ArrdemoComponent,
    TodoComponent,
    ProductComponent,
    XyzComponent,
    BootstrapdemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
