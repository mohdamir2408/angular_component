import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() public childEvent = new EventEmitter();
  sendEvent(){
    this.childEvent.emit("Hello World!!");
  }

}
