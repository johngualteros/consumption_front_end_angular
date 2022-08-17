import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeesComponent } from './update-employees.component';

describe('UpdateEmployeesComponent', () => {
  let component: UpdateEmployeesComponent;
  let fixture: ComponentFixture<UpdateEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
