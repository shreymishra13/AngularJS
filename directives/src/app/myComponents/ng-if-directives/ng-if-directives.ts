import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-directives',
  imports: [NgIf],
  templateUrl: './ng-if-directives.html',
  styleUrl: './ng-if-directives.css'
})
export class NgIfDirectives {

  color : string = "dark";
  // isLoggedIn : boolean  = true ;
isLoggedIn : boolean  = false;

}
