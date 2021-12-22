import { Component, Input } from '@angular/core';
import { FeedService } from '../feed.service';

@Component({
  selector: 'heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent{
  // //@Input("isLoved") isLoved: boolean = false;
  // isLoved = true;
  //@Input() feed_data:object | undefined ;
  // service: FeedService;
  // constructor(service: FeedService) {

  //   this.service = service;
  //  }

  // onClick():void{
  //   // this.isLoved = !this.isLoved;
  //   // this.service.updateLove();
  //   // update database
  // }

  // isFavorite: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick() { 
    // this.isFavorite = !this.isFavorite;
  }
}
