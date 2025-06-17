import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyBtn } from './myComponents/my-btn/my-btn';
import { CounterDisplay } from './myComponents/counter-display/counter-display';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , MyBtn , CounterDisplay],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  counter=0;

  handleAction(action : string){

    if(action=='increment'){
      this.counter++;
    }
    else if(action=='reset'){
      this.counter=0;

    }
    else{
      if(this.counter>0){
        this.counter--;
      }
    }
    // console.log(this.counter);
  }
}
