import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { VehicleService } from '../../../services/vehicle.service';

// Class
import { Vehicle } from '../../../models/vehicle';
import { app } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  constructor(
    private vehicleService : VehicleService,
  ) { }

  ngOnInit() {
    this.vehicleService.getVehicle();
  }

  onSubmit(vehicleForm: NgForm)
  {
    this.vehicleService.insertVehicle();
    console.log("registrado");   
  }

  onGet(getvehicleForm:NgForm)
  {
    
  }

}
