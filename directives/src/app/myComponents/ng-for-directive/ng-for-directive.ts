import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import  { demoUsers } from '../../../../resources/demo-data/demo-data'
@Component({
  selector: 'app-ng-for-directive',
  imports: [NgFor ],
  templateUrl: './ng-for-directive.html',
  styleUrl: './ng-for-directive.css'
})
export class NgForDirective {

  // students:string[] = ["Anil", "Shrey","Swati", "Tushar" , "Kamal" , "Arif" , "Arup"];
students = demoUsers;




}
