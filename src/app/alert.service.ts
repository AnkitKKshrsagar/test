import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  callMockAPI(){
    console.warn("The Call Mock API Executed")
    alert("Hi this is test message");
  }
}
