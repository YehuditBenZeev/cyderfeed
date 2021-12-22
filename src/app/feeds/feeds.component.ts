import { Component, OnInit } from '@angular/core';
//import { FeedService } from '../feed.service';

@Component({
  selector: 'feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

  feeds = [
    {feed_content:"1", likes: 1, love:true, time:1},
    {feed_content:"2", likes: 2, love:false, time:2},
    {feed_content:"3", likes: 3, love:true, time:3}
  ];
  
    constructor(/*service: FeedService*/){
        //this.feeds = service.getAllFeeds();
        // console.log(this.feeds);
    }

  ngOnInit(): void {
  }

}
