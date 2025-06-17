import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './myComponents/first-component/first-component';
import { TryToClickMe } from './myComponents/try-to-click-me/try-to-click-me';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , FirstComponent , TryToClickMe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'second-angular-app';
}
