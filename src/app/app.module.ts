import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { APP_CONFIG, APP_SERIVE_CONFIG } from './AppConfig/appconfig.service';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide : APP_SERIVE_CONFIG,
      useValue : APP_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
