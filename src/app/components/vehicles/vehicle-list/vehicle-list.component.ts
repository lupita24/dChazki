import { Component, OnInit } from '@angular/core';
// model
import { Vehicle} from '../../../models/vehicle';

// service
import { VehicleService } from '../../../services/vehicle.service';


@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  public vehicleList: Vehicle[];
  public vehicleNearest: Vehicle[];
  constructor(
    public vehicleservice: VehicleService,
  ) {
   }

  ngOnInit() {
    return this.vehicleservice.getVehicle().snapshotChanges().subscribe(item => {
      this.vehicleList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.vehicleList.push(x as  Vehicle);
      });
    });
  }
  
}
