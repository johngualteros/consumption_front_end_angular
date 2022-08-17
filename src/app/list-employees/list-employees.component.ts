import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.sass']
})
export class ListEmployeesComponent implements OnInit {

  employees:Employee[];

  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  editEmployee(id:number){
    this.router.navigate(['edit',id]);
  }
  private getEmployees(){
    this.employeeService.getListEmployees().subscribe(data=>{
      this.employees = data;
    })
  }
  deleteEmployee(id:number){
    swal({
        title: '¿Estas seguro?',
        text: "Confirma si deseas eliminar al empleado",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si , elimínalo',
        cancelButtonText: 'No, cancelar',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: true
      }).then((result) => {
        if(result.value){
          this.employeeService.deleteEmployee(id).subscribe(data=>{
            this.getEmployees();
            swal(
              'Empleado eliminado',
              'El empleado ha sido eliminado con exito',
              'success'
            )
          })
        }
      })
  }
}
