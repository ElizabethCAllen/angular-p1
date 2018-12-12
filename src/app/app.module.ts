import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { ContactComponent } from './contact/contact.component';
import { AlphabeticalPipe } from './pipes/alphabetical.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeroNotFoundComponent } from './hero-not-found/hero-not-found.component';
import { AmiibosComponent } from './amiibos/amiibos.component';
import { AmiibosDetailComponent } from './amiibos-detail/amiibos-detail.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    ContactComponent,
    AlphabeticalPipe,
    ReversePipe,
    HeroesComponent,
    HeroDetailComponent,
    NotFoundComponent,
    HeroNotFoundComponent,
    AmiibosComponent,
    AmiibosDetailComponent,
    SearchPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
