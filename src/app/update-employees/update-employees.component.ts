import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employees',
  templateUrl: './update-employees.component.html',
  styleUrls: ['./update-employees.component.sass']
})
export class UpdateEmployeesComponent implements OnInit {
  id: number;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(dato => {
      this.employee = dato;
    }, error => console.log(error));
  }

  goToListEmployees() {
    this.router.navigate(['/employees']);
    swal('Empleado actualizado', `El empleado ${this.employee.name} ha sido actualizado con exito`, `success`);
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(dato => {
      this.goToListEmployees();
    }, error => console.log(error));
  }
}
