import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions, Http } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AboutComponent } from './about/about.component';
import { GenericService } from './services/generic.service';
import { MockBackend } from '@angular/http/testing';
import { BookClienteComponent } from './book-cliente/book-cliente.component';
//import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AddBookComponent,
    UpdateBookComponent,
    AboutComponent,
    BookClienteComponent
  ],
  imports: [ 
    //BrowserAnimationsModule,   
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: "", component: BookComponent},
      {path: "book", component: AddBookComponent},
      {path: "updateBook/:id", component: UpdateBookComponent},
      {path: "about", component: AboutComponent},
      {path: "cliente", component: BookClienteComponent},
    ]),
    
  ],
  providers: [
    GenericService,
    BaseRequestOptions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
