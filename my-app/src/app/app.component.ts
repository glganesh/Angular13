import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private fb:FormBuilder){}

  togglenav(nav:any){
    if(nav.opened){
      nav.close()
    }
    else{
      nav.open();
    }
  }

  
  
}
