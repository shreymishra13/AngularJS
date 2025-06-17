import { Component } from '@angular/core';
import { FourthComponent } from '../fourth-component/fourth-component';

@Component({
  selector: 'app-first-component',
  imports: [FourthComponent],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css'
})
export class FirstComponent {
  name ="Shrey Mishra"
}
