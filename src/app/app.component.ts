import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chw-todo-list';
  constructor(){
    setTimeout(()=>{
      this.title = "Title has been changed due to some reasons";
    }, 2000)
  }
}
