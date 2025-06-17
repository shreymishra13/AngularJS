import { Component } from '@angular/core';

@Component({
  selector: 'app-my-form',
  imports: [],
  templateUrl: './my-form.html',
  styleUrl: './my-form.css'
})
export class MyForm {
  name : string ="";
  displayName :string = "";
 handleEvent(event : Event){
    // console.log(event)
    const name = (event.target as HTMLInputElement).value;
    // const 
    console.log(name);
    this.name = name ;

    
   
   
  }

setName(){
  this.name = "Saurabh";


}
getName(){
  this.displayName =this.name.toUpperCase();

}

 

}
