import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  feedText:string ='';
  isActive = false;
  onKeyUp(event:any) { // appending the updated value to the variable
    this.feedText = event.target.value;
    console.log(this.feedText);
  }

  addItem(event:any){
    console.log(event);
    // add item to db
  }

  canclePost(){
    this.feedText= '';
  }
}
