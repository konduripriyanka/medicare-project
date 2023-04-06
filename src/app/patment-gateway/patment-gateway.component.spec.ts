import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatmentGatewayComponent } from './patment-gateway.component';

describe('PatmentGatewayComponent', () => {
  let component: PatmentGatewayComponent;
  let fixture: ComponentFixture<PatmentGatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatmentGatewayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatmentGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
