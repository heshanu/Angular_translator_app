import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  log(){
    console.log('logging services!');
  }
  constructor() { }
}
