import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-display',
  imports: [],
  templateUrl: './counter-display.html',
  styleUrl: './counter-display.css'
})
export class CounterDisplay {

  @Input() counterValue:number=0;
}
