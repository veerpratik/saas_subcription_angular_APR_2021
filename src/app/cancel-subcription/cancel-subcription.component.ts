import { Component, OnInit } from '@angular/core';
import {SubcriptionService} from 'src/app/subcription.service';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-subcription',
  templateUrl: './cancel-subcription.component.html',
  styleUrls: ['./cancel-subcription.component.css']
})
export class CancelSubcriptionComponent implements OnInit {

  constructor(private _subcriptionservice:SubcriptionService,private authService:AuthService,private router:Router) { }

  productssList;
  ngOnInit(): void {


    if( this.authService.isAuthenticated()){

      
      this.cancelSub()
  
      }
      else{
  
        this.router.navigate(['/'])
  
      }

   

  }


  cancelSub(){

    this._subcriptionservice.cancelSub().subscribe(data => {
  
      if (data){
        
          console.log( data )   
        
      }
  
    }, error => {
        
      alert('somthing went wrong')

    });
  }

}
