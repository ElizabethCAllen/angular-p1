import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import  {TodoComponent } from './todo/todo.component';
import {HomeComponent} from './home/home.component';

const routes: Routes= [
 { path: '', component: HomeComponent },
 { path: 'todo', component: TodoComponent}
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
