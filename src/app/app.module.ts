import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';


import { AppComponent } from './app.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';


@NgModule({
  declarations: [
    AppComponent,
    InfiniteScrollComponent
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
