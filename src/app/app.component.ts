import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  templateUrl:'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 ninjas={
   name:'heshan',age:24
 };
  //add():void{}
  yell(e: any){
    alert("aaaaa");
    console.log(e);
  }
  just12(e:number){
    alert('qqqqqqqqqqqqqqq');

  }
}