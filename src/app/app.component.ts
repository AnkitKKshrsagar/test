import { Component } from '@angular/core';
import{AlertService} from './alert.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';
  constructor(ts:AlertService){
    ts.callMockAPI()
  }
}
