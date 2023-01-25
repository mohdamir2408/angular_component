import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  constructor(){}
  @Input() myData:string = '';
  @Input() myDataArray:string[] = [];
  @Input() myDataObj:any = {};

}
