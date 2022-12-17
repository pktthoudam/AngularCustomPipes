import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  toDate: Date= new Date();
  msg:string='welcome to angualar';
  num:number=865516168.116651;
  per:number=.98549526;
  cur:number=1856;

  //custom pipe transform
  length:number=0;
  breadth:number=0;
  result:number=0;
  tre:number=0
  check(){
    return this.result= (this.length * this.breadth)
  }
}
