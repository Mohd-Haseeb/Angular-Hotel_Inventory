import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [RoomsService] // this means, this service is available at the component level
})
export class EmployeeComponent {

  empName : string = "Luffy"

  constructor(@Self() private roomService : RoomsService) {}

}
