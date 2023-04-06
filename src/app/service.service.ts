import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Medicine } from './Medicine';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  url:string="http://localhost:8080/api/medicine/";

  //inject the DI
  constructor(private http:HttpClient) { }

  //get all users
  getAllMedicine():Observable<Medicine[]>{
    return this.http.get<Medicine[]>(this.url);
  }
 
  //get user by id
  getMedicineById(id:number):Observable<Medicine>{
    return this.http.get<Medicine>(this.url+id);
  }
  //get user by email
  getMedicineBy(name:string):Observable<Medicine>{
    return this.http.get<Medicine>(this.url+name);
  }
  //create record
  create(data:any ):Observable<any>{
    return this.http.post(this.url,data).pipe();
  }
  //deleteById
  deleteById(id:number){
    let myid=id;
    this.http.delete(this.url+myid).subscribe(data=>{
      return this.getAllMedicine();
    });
  }

  //update user
  updateMedicine(cust:Medicine,id:number){
    return this.http.put(this.url+id,cust);
  }
}
