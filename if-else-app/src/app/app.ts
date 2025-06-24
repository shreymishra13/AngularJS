import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IfElseDisplay } from './myComponents/if-else-display/if-else-display';
import { IfElseIfDisplay } from './myComponents/if-else-if-display/if-else-if-display';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , IfElseDisplay,
    IfElseIfDisplay
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'if-else-app';
}
