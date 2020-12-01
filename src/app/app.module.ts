import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './app.component';
import { InsertComponent } from './Products/insert/insert.component';
import { ListsComponent } from './Products/List/lists.component';

@NgModule({
  declarations: [
    ProductComponent,
    ListsComponent,
    InsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
