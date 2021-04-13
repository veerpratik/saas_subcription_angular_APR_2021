import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.css']
})
export class RegisterSuccessComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {



    if( this.authService.isAuthenticated()){

      
   
  
      }
      else{
  
        this.router.navigate(['/'])
  
      }
  }


  logout(){

    

    this.authService.logout()
    this.router.navigateByUrl("/");

  }

}
