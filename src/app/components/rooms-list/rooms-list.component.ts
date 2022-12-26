import { Component, Input } from '@angular/core';
import { RoomList } from '../rooms/rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent {

  // It means, we can use rooms as a property in app-rooms-list compomnent. It will get this data from anyone who is calling/using it
  @Input() rooms : RoomList[] = []

}
