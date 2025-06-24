import { Component } from '@angular/core';

@Component({
  selector: 'app-my-form',
  imports: [],
  templateUrl: './my-form.html',
  styleUrl: './my-form.css'
})
export class MyForm {
  name : string ="";
  email : string="";
  displayName :string = "";
  displayEmail :string = "";
 handleEvent(event : Event){
    const name = (event.target as HTMLInputElement).value;
    console.log(name);
    this.name = name ;

    
   
   
  }

setName(){
  this.name = "Saurabh";


}
getName(){
  this.displayName =this.name.toUpperCase();

}
getEmail(email:string){
  console.log(email);
  this.displayEmail = email;



}
setEmail(){
  this.email = "saurbh.misra@gmail.com"
}

 

}
