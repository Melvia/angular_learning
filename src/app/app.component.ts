import { Component } from '@angular/core';
      
@Component({
    selector: 'my-app',
    template: `<div class="info"><child-comp [(userName)]="name"></child-comp>
    <div>Выбранное имя: {{name}}</div></div>`,
    styleUrls : ['./app.component.css']
})
export class AppComponent { 
    name:string="Tom";
}
