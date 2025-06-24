import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else-if-display',
  imports: [],
  templateUrl: './if-else-if-display.html',
  styleUrl: './if-else-if-display.css'
})
export class IfElseIfDisplay {
  color='red';
  
  setSuccess(){
    this.color='success';
    
  }
  setPrimary(){
    this.color='primary';

  }
  setDark(){
    this.color='dark';

  }
  setDanger(){
    this.color='danger';

  }
}
