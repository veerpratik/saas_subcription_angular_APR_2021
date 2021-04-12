import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SubcriptionService} from 'src/app/subcription.service'
import { AuthService } from 'src/app/auth.service';


declare function stripeElements(): any 

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  productssList;
  productsPriceList;

  plan = '';
  total = '';

  constructor(private router:Router, private _subcriptionservice:SubcriptionService) { }

  ngOnInit(): void {

    stripeElements()
    // if(localStorage.getItem('loginData') == null){
    //   this.router.navigate(['/'])
    // }

    this.GetProdList()

    console.log(document.getElementById('display-cart'))
    
  }



  planselect(name, price, id){


    
    this.plan = name
    this.total = price
     

    // stripeElements()
      

  }

  GetProdList(){


    this._subcriptionservice.getProdList().subscribe(data => {
  
      if (data){
        
  
          this.productsPriceList = data.result;
          this.productssList = data.result2
         
  
          // this.paginationObject = this._commonservice.getPaginationObject(data)    
        
      }
  
    });
  }

}
