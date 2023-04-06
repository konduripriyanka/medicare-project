import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Admin';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  admin:Admin=new Admin();

  name:any;
  email:any;

  constructor(private service:ServiceService,public router:Router) {

  }

  public loginadNow(){
    this.router.navigate(['/admin-portal'])
 
  }
}
