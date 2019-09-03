import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { VehicleListComponent } from './components/vehicles/vehicle-list/vehicle-list.component';
import { VehicleComponent } from './components/vehicles/vehicle/vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    VehicleListComponent,
    VehicleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCodQG-F8nKF-CljJXx7HiTk1ILxp7mAMU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
