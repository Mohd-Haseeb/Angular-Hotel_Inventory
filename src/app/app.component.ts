import { AfterViewInit, Component, ElementRef, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './components/rooms/rooms.component';
import { LoggerService } from './components/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Hotel-Inventory-App';

  role : string = 'Admin';

  constructor(@Optional() private loggerService : LoggerService) {}

  // @ViewChild('user', { read: ViewContainerRef }) vcr !: ViewContainerRef;

  @ViewChild('name', {static:true}) name !: ElementRef;

  ngOnInit() {
    // this.name.nativeElement.innerText = "Writing this line in .ts file and displaying dynamically using @ViewChild"
    this.loggerService.log("AppComponent : ngOnInit")
  }
  
  ngAfterViewInit(): void {
    // const componentRef =  this.vcr.createComponent(RoomsComponent);

    // to access instances of the component
    // componentRef.instance.hotelName = "Changed this name using ViewChild"
      
  };



}
