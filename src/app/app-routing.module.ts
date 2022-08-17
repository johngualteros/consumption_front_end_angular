import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { UpdateEmployeesComponent } from './update-employees/update-employees.component';

const routes: Routes = [
  {path : 'employees',component : ListEmployeesComponent},
  {path : '', redirectTo : 'employees', pathMatch : 'full'},
  {path : 'register',component : RegisterEmployeeComponent},
  {path : 'edit/:id',component : UpdateEmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
