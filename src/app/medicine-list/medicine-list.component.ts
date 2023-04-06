import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Medicine } from '../Medicine';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private service:ServiceService) { }

  medicine:Medicine
  
  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id:",id);
    this.service.getMedicineById(Number(id)).subscribe(data=>this.medicine=data);
  }

}
