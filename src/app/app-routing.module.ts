import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { EditMedicineComponent } from './edit-medicine/edit-medicine.component';
import { HomeComponent } from './home/home.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { PatmentGatewayComponent } from './patment-gateway/patment-gateway.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserMedicineDetailsComponent } from './user-medicine-details/user-medicine-details.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'add-medicine',component:AddMedicineComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'admin-portal',component:AdminPortalComponent},
  {path:'edit-medicine/:id',component:EditMedicineComponent},
  {path:'home',component:HomeComponent},
  {path:'medicine-details',component:MedicineDetailsComponent},
  {path:'medicine-list',component:MedicineListComponent},
  {path:'patment-gateway',component:PatmentGatewayComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'user-medicine-details',component:UserMedicineDetailsComponent},
  {path:'user-portal',component:UserPortalComponent},
  {path:'user-registration',component:UserRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
