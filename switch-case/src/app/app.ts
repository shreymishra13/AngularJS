import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwitchCases } from './myComponents/switch-cases/switch-cases';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , SwitchCases],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'switch-case';
}
