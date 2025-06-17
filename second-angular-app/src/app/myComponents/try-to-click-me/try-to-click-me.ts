import { Component } from '@angular/core';

@Component({
  selector: 'app-try-to-click-me',
  imports: [],
  templateUrl: './try-to-click-me.html',
  styleUrl: './try-to-click-me.css'
})
export class TryToClickMe {

   handleClick(){
    console.log("Button was clicked!");
    alert("Button Clicked!");

    this.understandingFunctionCallViaAnotherFunctionInSameClass()
  }

  understandingFunctionCallViaAnotherFunctionInSameClass(){
    console.log("this call is made by another function inside the same class which also shows the usage of this keyword in JS. it is an important comand for it!")
  }

}
