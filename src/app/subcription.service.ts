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
   let t = localStorage.getItem('access_token')
    let headers : HttpHeaders = new HttpHeaders({ 'Accept': 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
    'Authorization': 'Token ' + t});
    return this.httpClient.get(this.baseUrl + 'api/v1/manager/checkout/', { headers:headers });
  }


  
  cancelSub():Observable<any> {
   let t = localStorage.getItem('access_token')
    let headers : HttpHeaders = new HttpHeaders({ 'Accept': 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
    'Authorization': 'Token ' + t});
    return this.httpClient.get(this.baseUrl + 'api/v1/manager/cancel-sub/', { headers:headers });
  }



}
