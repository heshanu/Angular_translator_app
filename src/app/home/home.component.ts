import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //set input to parent compoents
@Input() ninjas: any;
@Output() onYell=new EventEmitter();
@Output() on1=new EventEmitter();

  homeTitle="Welcome Abroad!";
  constructor() { }

  ngOnInit(): void {
  }

  fireYellEvent(e:any){
    this.onYell.emit(e);
  }

  just1(e:any){
    this.onYell.emit(e);
  }
}
