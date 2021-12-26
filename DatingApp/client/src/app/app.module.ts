import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import AppComponent from './app.component';
import { HttpClientModule } from "@angular/common/http";


  @NgModule({
//    _declarations: [         1
//      AppComponent
//    ],
//   get declarations() {
//     return this._declarations;
//   },
//   set declarations(value) {
//     this._declarations = value;
//   },
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
