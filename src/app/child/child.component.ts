import { Component, ContentChild, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {

  counter=0;
  interval: any;

  @Input()
  channelName="";

  constructor() { 
    console.log("Child constructor is called");
  }

  @ContentChild('projectedContent') projectedContent: any;

  

  ngOnInit() {
    console.log("Child onInit is called");
    console.log("onInit - "+this.projectedContent);

    // this.interval = setInterval(() =>{
    //   this.counter = this.counter+1;
    //   console.log(this.counter);
    // },1000);
  }

  

  ngOnDestroy(){
    // clearInterval(this.interval); // fix memory leak
    console.log("Child onDestry is called");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    console.log("Child onChange is called");
    console.log("onChanges - "+this.projectedContent);
  }

  ngDoCheck(){
    console.log("Child DoCheck is called");
    console.log("DoCheck - "+this.projectedContent);
  }

  ngAfterContentInit(){
    console.log("in Child AfterContentInit");
    console.log("AfterContentInit - "+this.projectedContent);
  }

  ngAfterContentChecked(){
    console.log('in AfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('in AfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('in AfterViewChecked');
  } 
}
