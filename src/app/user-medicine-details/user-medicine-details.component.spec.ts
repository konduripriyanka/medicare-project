import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMedicineDetailsComponent } from './user-medicine-details.component';

describe('UserMedicineDetailsComponent', () => {
  let component: UserMedicineDetailsComponent;
  let fixture: ComponentFixture<UserMedicineDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMedicineDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMedicineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
