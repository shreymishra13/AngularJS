import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-cases',
  imports: [],
  templateUrl: './switch-cases.html',
  styleUrl: './switch-cases.css'
})
export class SwitchCases {

  color : string = "green"; 
  handleClick(event : Event){
    const element = event.target as HTMLButtonElement;
    // console.log(element.textContent)
    const color = element.textContent?.toLowerCase().toString() ??'';
    console.log(color);
    this.color = color;
    console.log(this.color)
  }

}
