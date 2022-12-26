import { Component, OnInit } from '@angular/core';
import { RoomList, Rooms } from './rooms';



@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
    

    hotelName:string = 'Developer\'s Hotel';
    noOfRooms:number = 4;
    hideDetails:boolean=false

    rooms : Rooms = {
      totalRooms : 10,
      availableRooms : 0,
      bookedRooms : 10
    }

    roomList : RoomList[] = []
    roomSelected! : RoomList ;


    ngOnInit(): void {
      this.roomList = [

      {
        roomNumber : 1,
        roomType : 'standard',
        price : 1000,
        photo : 'http://imagelink756',
        checkInTime : new Date('25-Dec-2022'),
        checkOutTime : new Date('30-Dec-2022')
      },
      {
        roomNumber : 2,
        roomType : 'luxury',
        price : 2000,
        photo : 'http://imagelin865k',
        checkInTime : new Date('26-Dec-2022'),
        checkOutTime : new Date('28-Dec-2022')
      },
      {
        roomNumber : 3,
        roomType : 'basic',
        price : 500,
        photo : 'http://imagelink365',
        checkInTime : new Date('21-Dec-2022'),
        checkOutTime : new Date('1-Jan-2023')
      }
      ];

      

    }


    hideRooms() : void {
      this.hideDetails = !this.hideDetails;
    };

    selectRoom(roomSelected : RoomList){
        this.roomSelected = roomSelected;
    }

}
