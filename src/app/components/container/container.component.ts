import { AfterContentInit, Component, ContentChild, Host, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers : [RoomsService]
})
export class ContainerComponent implements OnInit, AfterContentInit {

  constructor(@Host() private roomService : RoomsService) {} // So, all the components loaded inside this component will have a separate instance

  // say, we want to perform some operations on Employee Component
  @ContentChild(EmployeeComponent) employeeComponent !: EmployeeComponent;

  ngAfterContentInit(): void {
    this.employeeComponent.empName = "Shabrez Mohd"
  }
  ngOnInit(): void {
    
  }

}
