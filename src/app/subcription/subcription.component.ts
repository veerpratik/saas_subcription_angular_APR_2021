import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SubcriptionService} from 'src/app/subcription.service';
import { AuthService } from 'src/app/auth.service';

declare function planSelect(name,price, id): any 
declare function stripeElements(t): any 



@Component({
  selector: 'app-subcription',
  templateUrl: './subcription.component.html',
  styleUrls: ['./subcription.component.css']
})
export class SubcriptionComponent implements OnInit {

  productssList;
  productsPriceList;

  constructor(private router:Router, private _subcriptionservice:SubcriptionService, private authService:AuthService) { }

  ngOnInit(): void {


    if( this.authService.isAuthenticated()){

      
    this.GetProdList()
    stripeElements(localStorage.getItem('access_token'))

    }
    else{

      this.router.navigate(['/'])

    }

  
  
  }


  myplanSelect(name, price, id){

    planSelect(name,price, id)


  }


  GetProdList(){


    this._subcriptionservice.getProdList().subscribe(data => {
  
      if (data){
        
        
          this.productsPriceList = data.result;
          this.productssList = data.result2
          console.log(  this.productsPriceList)
          console.log( this.productssList )
  
          // this.paginationObject = this._commonservice.getPaginationObject(data)    
        
      }
  
    });
  }

}
