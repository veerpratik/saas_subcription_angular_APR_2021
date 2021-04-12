import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcriptionService {

  constructor(private httpClient :HttpClient) { 



  
  }

  private baseUrl ="http://localhost:8000/";
  getProdList():Observable<any> {
    let headers : HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.get(this.baseUrl + 'api/v1/manager/checkout/', { headers:headers });
  }
}
