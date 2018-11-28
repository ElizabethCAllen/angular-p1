import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { HeroComonent } from './heroes/heros.component';
import { HerpDetailComponent, HeroDetailComponent } from './hero-detail/hero-detail.component';
import  {TodoComponent } from './todo/todo.component';
import {HomeComponent} from './home/home.component';

const routes: Routes= [
 { path: '', component: HomeComponent },
 { path: 'todo', component: TodoComponent},
 { path 'contact', component:ContactComponent},
 {path 'heroes', component: HeroComonent},
 { path 'hero/:id', component:HeroDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
