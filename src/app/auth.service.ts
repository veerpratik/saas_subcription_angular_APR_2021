import { Injectable } from '@angular/core';
import { LoginPayload } from './auth/login/login-payload';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
import {RegisterPayload} from './auth/register/register-payload';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseurl ="http://localhost:8000/"; 

  constructor(private httpClient:HttpClient,private localStorageService:LocalStorageService) {
    
  }

  //login aoi call
  login(loginPayload:LoginPayload):Observable<boolean> {
    let headers :HttpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
    return this.httpClient.post(this.baseurl +'api/v1/login/',loginPayload, {headers:headers}).pipe(map(data =>{
      this.localStorageService.store('loginData',data);
      localStorage.setItem('access_token',data['access'])

      console.log(localStorage.getItem('access_token'))

      // console.log('from local strograe service',data)
      return true;
  
    }));
  }


logout() {
    
    localStorage.removeItem('access_token');
}

 //isAuthenticated() method to check whether user has logged in or not
  isAuthenticated():boolean{
    return localStorage.getItem('access_token') !=null;
  }



   //register api call
  register(registerPayload:RegisterPayload): Observable<any> {
    let headers : HttpHeaders = new HttpHeaders({'Content-Type':'application/JSON'});
    return this.httpClient.post(this.baseurl + 'api/v1/singnup/',registerPayload, {headers:headers});
  }

  
  


}
