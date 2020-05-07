import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Flight } from '../flight';

@Component({
  selector: 'app-viewflight',
  templateUrl: './viewflight.component.html',
  styleUrls: ['./viewflight.component.css']
})
export class ViewflightComponent implements OnInit {


  flights: Flight[] = [];
  msg:string;
  flight: Flight = new Flight();


  editFlag: boolean = false;
   setFlights: any;
  constructor(private flightService: FlightService) { }

  ngOnInit(){
     this.flightService.viewFlights().subscribe(data=>this.flights = data);
  }
  deleteFlight(flightNumber:number){

    this.flightService.deleteFlight(flightNumber).subscribe(data=>this.flight=data);
    this.ngOnInit();
  }
  // updateFlight(flightNumber:number){

  //   this.flightService.updateFlight(flightNumber,this.flight).subscribe(data=>this.flight=data);
  //   this.ngOnInit();
  // }


  
}


