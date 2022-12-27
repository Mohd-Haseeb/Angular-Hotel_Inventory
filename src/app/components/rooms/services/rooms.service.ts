import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { APP_SERIVE_CONFIG } from 'src/app/AppConfig/appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {


  roomList : RoomList[] = [

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


  constructor(@Inject(APP_SERIVE_CONFIG) private config : AppConfig) {  // value provider
    console.log('Room Service Initialised');
    console.log(this.config.apiEndPoint);
    
  }

  getRooms(){
    return this.roomList;
  }

}
