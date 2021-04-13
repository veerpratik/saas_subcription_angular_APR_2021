import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HttpClientModule } from '@angular/common/http';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SubcriptionComponent } from './subcription/subcription.component';
import { CancelSubcriptionComponent } from './cancel-subcription/cancel-subcription.component';



@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    LoginComponent,
    RegisterComponent,
    RegisterSuccessComponent,
    CheckoutComponent,
    SubcriptionComponent,
    CancelSubcriptionComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    
    RouterModule.forRoot([
      
      {path:'',component:LoginComponent },
      {path:'register',component:RegisterComponent },
      {path:'checkout', component:CheckoutComponent},
      {path:'subcribe', component:SubcriptionComponent},
      {path:'complete', component:RegisterSuccessComponent},
      {path:'cancel-subcription', component:CancelSubcriptionComponent}
     

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
