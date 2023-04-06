import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit{
  
  isSubmitted= false;
  constructor(private service:ServiceService) { }


  ngOnInit(): void {
  }

  medicine={
    name:'',
    description:'',
    category:'',
    image:'',
    price:'',

  }
  //add record
  addMedicine():void{
    const data={
      name:this.medicine.name,
      description:this.medicine.description,
      category:this.medicine.category,
      image:this.medicine.image,
      price:this.medicine.price,
    }
    if(!data.name){
      alert('please provide name');
      return;
    }
    if(!data.description){
      alert('please provide desc');
      return;
    }
    if(!data.category){
      alert('please provide category');
      return;
    }
    

     
     this.service.create(data).subscribe(
      response=>{ console.log(response);
      this.isSubmitted=true},
      error=>{console.log(error);}
     )
  }
}