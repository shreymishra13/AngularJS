import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  student:string | null="" ;
  id : string | null = "";
  description :string |  null ="";
  
  constructor(private route : ActivatedRoute){
    // this.student = route.snapshot.paramMap.get(username);
    // console.log(route.snapshot.paramMap.get('username'));
    // this.student = route.snapshot.paramMap.get('username');

    // this.id = route.snapshot.paramMap.get('id');

 




  }

  ngOnInit(){
   this.route.queryParams.subscribe(params=>{
    this.student = params['name'];
    this.description = params['description'];
   })
  }

}
