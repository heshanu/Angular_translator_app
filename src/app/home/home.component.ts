import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { reduce } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
//services
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[LoginService]// services must be imported and add to providers
})

export class HomeComponent implements OnInit {

  //set input to parent compoents
@Input() ninjas: any;
@Output() onYell=new EventEmitter();
@Output() on1=new EventEmitter();

  homeTitle="Welcome Abroad!";

  constructor(private logger:LoginService) {}

  logIt(){
    this.logger.log();
  }
  

  ninjas1:any=[/*
    {name:"heshan",age:12,color:"red"},
    {name:"heshan1",age:121,color:"black"},
    {name:"heshan2",age:1223,color:"yellow"}*/
  ];

  //terms:any;
  ngOnInit(): void {}
/*
  fireYellEvent(e:any){
    this.onYell.emit(e);
  }

  just1(e:any){
    this.onYell.emit(e);
  }
  ninjas=[]*/
}
