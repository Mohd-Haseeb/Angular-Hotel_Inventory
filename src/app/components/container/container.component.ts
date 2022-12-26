import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, AfterContentInit {


  // say, we want to perform some operations on Employee Component
  @ContentChild(EmployeeComponent) employeeComponent !: EmployeeComponent;

  ngAfterContentInit(): void {
    this.employeeComponent.empName = "Shabrez Mohd"
  }
  ngOnInit(): void {
    
  }

}
