import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.sass']
})
export class RegisterEmployeeComponent implements OnInit {

  employee : Employee = new Employee;
  
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }
  saveEmployee(){
    this.employeeService.addEmploye(this.employee).subscribe(data=>{
      console.log(data);
      this.redirectHome();
    }, err => console.log(err));
  }
  redirectHome(){
    this.router.navigate(['/employees']);
  }
  onSubmit(){
    this.saveEmployee();
  }

}
