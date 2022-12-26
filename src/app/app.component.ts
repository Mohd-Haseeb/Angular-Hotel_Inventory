import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './components/rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Hotel-Inventory-App';

  role : string = 'Admin';

  @ViewChild('user', { read: ViewContainerRef }) vcr !: ViewContainerRef;

  ngOnInit() {
  }
  
  ngAfterViewInit(): void {
    const componentRef =  this.vcr.createComponent(RoomsComponent);

    // to access instances of the component
    componentRef.instance.hotelName = "Changed this name using ViewChild"
      
  }

}
