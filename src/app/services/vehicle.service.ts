import { Injectable } from '@angular/core';

import {AngularFireDatabase,AngularFireList} from'angularfire2/database';

import {Vehicle} from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  vehiclesList: AngularFireList<any>;
  selectedVehicle: Vehicle = new Vehicle(); 

  constructor(private firebase: AngularFireDatabase) { }

  getVehicle()
  { 
    return this.vehiclesList = this.firebase.list('vechicles')
  }

  addRequirement(primes: number[]) {
    console.log(primes.length);
    var value = Math.floor(Math.random()*primes.length);
    
    return primes[value];
  }
  
  insertVehicle()
  {
    let i=0;
    if (navigator)
    {
      console.log("prueba");
      navigator.geolocation.getCurrentPosition( pos => {
        while(i < 10){
          var array1 = [1, 2];
          var array2 = [1, 3];
          var array3 = [1, 5];
        this.vehiclesList.push({
        latitud: pos.coords.latitude+ +(Math.random() * (0.120 - 0.00200) + 0.00200).toFixed(4),
        longitud: pos.coords.longitude+ +(Math.random() * (0.120 - 0.00200) + 0.00200).toFixed(4),
        requirement1: this.addRequirement(array1),
        requirement2: this.addRequirement(array2),
        requirement3: this.addRequirement(array3),
      });
      i++;
    }
})
    } 
  }

  deleteVehicle($key: string)
  {
    this.vehiclesList.remove($key);
  }
}
