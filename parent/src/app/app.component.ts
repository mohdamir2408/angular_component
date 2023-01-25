import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent';
  name = 'Amir';
  fruit = ["Apple","Mango","Orange","Banana","Grapes"];
  obj = {
    name : "Ram",
    age : 28,
    isMarried : true
  }
  changeData(){
    this.name = 'Mohd Amir';
  }
}
