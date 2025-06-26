import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  newTask:string="";
  
  TaskList : {time : string , newTask:string}[]=[];
  
  
  addTask(){
    const taskToBeAdded = this.newTask;
    if(taskToBeAdded=='' || taskToBeAdded==null)return ;
    
    this.TaskList.push({
      time : new Date().toLocaleString('en-In', ), 
      newTask : this.newTask
        })
        this.newTask ="";
        console.log(this.TaskList);
  }

  removeTask(event : Event){
    const element = event.target as HTMLButtonElement;
    console.log(element.parentElement);
    element.parentElement?.remove();

  }


}
