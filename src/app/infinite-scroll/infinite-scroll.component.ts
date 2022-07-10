import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  // styleUrls: ['./infinite-scroll.component.css']
})
export class InfiniteScrollComponent implements OnInit {
  @ViewChild('container') container: ElementRef;
  public list: any[];

  constructor() { }

  ngOnInit() {
  }
  onScrollDown() {
      let repeatConainer = this.container.nativeElement;
      this.list = [];
      for(let i = 0; i < 7; i++){
        this.list.push(repeatConainer)
      }
      console.log(this.list)
    }

}
