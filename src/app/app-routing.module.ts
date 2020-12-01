import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InsertComponent } from './Products/insert/insert.component';
import { ListsComponent } from './Products/List/lists.component';


const routes: Routes = [
  { path: 'products', component: ListsComponent },
  { path: 'product/:name', component: InsertComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
