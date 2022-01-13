import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  isChild = true;
  channelName = "";

 
  constructor() { 
    console.log("Parent constructor is called");
  }

  ngOnInit() {
    console.log("Parent onInit is called");
  }

  

  toggleChild(){
    this.isChild= !this.isChild;
  }

  ngOnChanges(){
    console.log("Parent onChange is called");
  }

  ngDoCheck(){
    console.log("Parent DoCheck is called");
  }
}
