import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(){}
  

 close = true;

   toggle(){
    this.close = !this.close;
  }

  // public close = true;
  // public close = false;
 
  // public toggle(){
  //    this.close = !this.close;
  //  }
 
  
  
}
