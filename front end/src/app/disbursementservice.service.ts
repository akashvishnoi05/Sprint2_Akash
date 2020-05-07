import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DisbursementserviceService {
  constructor(private http:HttpClient) { }

  public doRegistration(loanrequest){
    return this.http.post("http://localhost:1324/flight/add",loanrequest,{responseType:'text' as 'json'});
  }

  public getLoanRequests():Observable<any>{
    return this.http.get("http://localhost:9090/getAllLoanRequests");
  }

  public getLoanRequestbyId(id):Observable<any>{
    return this.http.get("http://localhost:9090/getAllLoanRequests/"+id);
  }

  public getUserByEmail(email){
    return this.http.get("http://localhost:9090//findLoanRequest/"+email);
  }

  public deleteLoanRequest(id){
    return this.http.delete("http://localhost:9090/cancel/"+id);
  }
}
