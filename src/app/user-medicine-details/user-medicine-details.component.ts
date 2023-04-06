import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Medicine } from '../Medicine';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user-medicine-details',
  templateUrl: './user-medicine-details.component.html',
  styleUrls: ['./user-medicine-details.component.css']
})
export class UserMedicineDetailsComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }
  medicines:Medicine[];


  ngOnInit(): void {
    this.service.getAllMedicine().subscribe(result=>this.medicines=result);
  }

  buynow(){
    this.router.navigate(['/patment-gateway']);
  }

  addtocart(){
    this.router.navigate(['/patment-gateway']);
  }
}
