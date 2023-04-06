import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { EditMedicineComponent } from './edit-medicine/edit-medicine.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { PatmentGatewayComponent } from './patment-gateway/patment-gateway.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { UserMedicineDetailsComponent } from './user-medicine-details/user-medicine-details.component';
import { HomeComponent } from './home/home.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MedicineListComponent } from './medicine-list/medicine-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    EditMedicineComponent,
    AdminPortalComponent,
    UserPortalComponent,
    PatmentGatewayComponent,
    MedicineDetailsComponent,
    UserMedicineDetailsComponent,
    HomeComponent,
    AddMedicineComponent,
    MedicineListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
