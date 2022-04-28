import { Component } from '@angular/core';
       
@Component({
    selector: 'my-app',
    template: `<div class="info"><h1>у кого слишком дофига времени?</h1><h2>Количество кликов: {{clicks}}</h2>
              <child-comp (onChanged)="onChanged($event)"></child-comp></div>`,
    styleUrls: ['./app.component.css']    
})
export class AppComponent { 
     
    clicks:number = 0;
    onChanged(increased:any){
        increased==true?this.clicks++:this.clicks--;
    }
}