import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyForm } from './myComponents/my-form/my-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 

}
