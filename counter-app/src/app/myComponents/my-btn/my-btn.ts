import { CommonModule } from '@angular/common';
import { Component , EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-my-btn',
  imports: [CommonModule],
  templateUrl: './my-btn.html',
  styleUrl: './my-btn.css'
})
export class MyBtn {


  @Input() label:string = 'increment';
  @Input() btnClass:string ="btn btn-primary"

  @Output() action = new EventEmitter<string>();

  handleClick(){
    // console.log("button is clicked" + this.label)
    this.action.emit(this.label.toLowerCase());
  }
  

}
