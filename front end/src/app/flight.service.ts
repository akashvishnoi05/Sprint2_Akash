import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flights: Flight[];
  constructor(private http: HttpClient) {}

  public viewFlights():Observable<any>{
    return this.http.get("http://localhost:1331/flight");
    
  }
  public addFlight(flight:Flight):Observable<any>{
    return this.http.post("http://localhost:1331/flight/add",flight,{responseType:'text'});
  }
  public deleteFlight(flightNumber:number):Observable<any>
  {

         console.log("deleted");
         let endpoint=flightNumber;
         return this.http.delete("http://localhost:1331/flight/delete/ "+endpoint);

  }
  public updateFlight(flightNumber:number,flight:Flight):Observable<any>{

             let endpoint=flightNumber;
             return this.http.put("http://localhost:1331/flight/modify"+flightNumber,flight);
  }
  public findByCode(flightNumber:number):Observable<any>{

         const httpOptions={

              headers:new HttpHeaders({'Content-type':'application/json'})
         };
         let endpoint=flightNumber
         return this.http.get("http://localhost:1331/flight/"+flightNumber,httpOptions);
  }
}
