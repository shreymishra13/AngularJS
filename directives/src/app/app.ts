import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIfDirectives } from './myComponents/ng-if-directives/ng-if-directives';
import { NgForDirective } from './myComponents/ng-for-directive/ng-for-directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , NgIfDirectives ,NgForDirective ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'directives';
}
