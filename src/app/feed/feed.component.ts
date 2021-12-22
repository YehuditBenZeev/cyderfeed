import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit{

  @Input("feedContent") feedContent: string | undefined;
  @Input("likes") feedLikes: number | undefined;
  @Input("love") feedLove: boolean | undefined;
  @Input("time") feedTime: number | undefined;
  constructor() { }

  
  ngOnInit(): void {
  }
}
