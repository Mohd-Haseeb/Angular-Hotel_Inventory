import { Component, OnInit, DoCheck, ViewChild, AfterViewInit, AfterViewChecked, ViewChildren, QueryList, SkipSelf } from '@angular/core';
import { RoomList, Rooms } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { Head } from 'rxjs';
import { RoomsService } from './services/rooms.service';



@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
    

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

    roomListComName = 'Table Details : ';
    
    // Here, using ViewChild we have created a new instance of Header Component
    @ViewChild(HeaderComponent, {static:true} ) headerComponent !: HeaderComponent;


    // to access, all the instances we need to use @ViewChildren
    @ViewChildren(HeaderComponent) headerChildrenComponent !: QueryList<HeaderComponent>;

    constructor(@SkipSelf()  private roomService : RoomsService) {}

    ngOnInit(): void {

      // console.log(this.headerComponent) // o/p will be undefined for {static : false}

      this.roomService.getRooms().subscribe(data => {
        this.roomList = data;
      });

    };

    ngAfterViewInit(): void {
        // console.log(this.headerComponent); // we will get proper output of type HeaderComponent
        this.headerComponent.title = 'Mohd Haseeb' // Here, title will be set in header-component once the template is completely laoded
    };

    ngAfterViewChecked(): void {
      this.headerComponent.title = 'Mohd Haseeb' 

      this.headerChildrenComponent.last.title = 'Last Title';
    //  console.log(this.headerChildrenComponent.get(0))
    }

    ngDoCheck(): void {
        console.log("Some changes detected!!!!!");
    };


    hideRooms() : void {
      this.hideDetails = !this.hideDetails;
      this.roomListComName = 'Room Details :'
    };

    selectRoom(roomSelected : RoomList){
        this.roomSelected = roomSelected;
    };

    addRoom(){
      const room : RoomList = {
        roomNumber : 4,
        roomType : 'standard',
        price : 799,
        photo : 'http://imagelink75436',
        checkInTime : new Date('26-Dec-2022'),
        checkOutTime : new Date('05-Jan-2023')

      };

      // this.roomList.push(room) => this doesn't follow the Principle of Immutability
      this.roomList = [...this.roomList, room]; 
    }

}
