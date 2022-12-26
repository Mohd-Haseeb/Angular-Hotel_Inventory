import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges,OnInit, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms/rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges, OnInit  {

  // It means, we can use rooms as a property in app-rooms-list compomnent. It will get this data from anyone who is calling/using it
  @Input() rooms : RoomList[] = []

  @Output() selectedRoom  = new EventEmitter<RoomList>();

  @Input() name : string = '';

  constructor() {}

  ngOnInit() : void{

  };

  ngOnChanges(changes : SimpleChanges) : void{
    console.log(changes);

    if(changes['name']){
      this.name = changes['name'].currentValue.toUpperCase();
    }

  }

  displaySelectedRoom(value : RoomList){
    this.selectedRoom.emit(value);
  }


} 
