import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent  implements OnInit {


  isSubmitted= false;
  constructor(private service:ServiceService) { }


  ngOnInit(): void {
  }

  user={
    name:'',
    country:'',
    password:'',
    email:'',
    login:'',

  }
  //add record
  addUser():void{
    const data={
      name:this.user.name,
      email:this.user.email,
      country:this.user.country,
      password:this.user.password,
      login:this.user.login,
    }
    if(!data.name){
      alert('please provide name');
      return;
    }
    if(!data.email){
      alert('please provide email');
      return;
    }
    if(!data.password){
      alert('please provide password');
      return;
    }
    if(!data.country){
      alert('please provide country');
      return;
    }

     
     this.service.create(data).subscribe(
      response=>{ console.log(response);
      this.isSubmitted=true},
      error=>{console.log(error);}
     )
  }
}