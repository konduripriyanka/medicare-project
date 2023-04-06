import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Medicine } from '../Medicine';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-medicine-details',
  templateUrl: './medicine-details.component.html',
  styleUrls: ['./medicine-details.component.css']
})
export class MedicineDetailsComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }
  medicines:Medicine[];


  ngOnInit(): void {
    this.service.getAllMedicine().subscribe(result=>this.medicines=result);
  }
  DeleteUserById(id:number){
    //refresh the list once user is deleted
    this.medicines=this.medicines.filter(c=>c.id!=id);
    //delete user
    this.service.deleteById(id);
    console.log("medicine Deleted");
  }

}