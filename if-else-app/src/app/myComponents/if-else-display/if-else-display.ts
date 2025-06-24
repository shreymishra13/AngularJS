import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else-display',
  imports: [],
  templateUrl: './if-else-display.html',
  styleUrl: './if-else-display.css'
})
export class IfElseDisplay {

  isDisplay :boolean = false;

  toggleDiv(){
    // this.isDisplay = !this.isDisplay;
    this.isDisplay = this.isDisplay?false : true;

    console.log(this.isDisplay);
  }
}
