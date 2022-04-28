import { Component } from '@angular/core';
      
@Component({
    selector: 'my-app',
    template: `<div class="info"><child-comp [userName]="name" [userAge]="age"></child-comp>
                <input type="text" [(ngModel)]="name" />
                <input type="text" [(ngModel)]="age" /></div>`,
    styleUrls : ['./app.component.css']
})
export class AppComponent { 
    name:string="Tomфы";
    age:number = 29;
}
