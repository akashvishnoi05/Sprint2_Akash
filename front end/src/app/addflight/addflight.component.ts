import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  title='addflight'
  flight:Flight=new Flight();
  constructor(private flightService:FlightService) { }

  ngOnInit(): void {
  }

  addFlight():void{
    this.flightService.addFlight(this.flight).subscribe(data=>
      {
        alert("Flight added");
      },
      error=>
      {
      console.log("error occured",error);
      }
      );
  }

}
