import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './components/event/event.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ShowTicketInfoComponent } from './components/showticketinfo/showticketinfo.component';
import { FirstTimeComponent } from './components/register1sttimepayment/register1sttimepayment.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, RegisterComponent, EventComponent, CheckoutComponent, ShowTicketInfoComponent, FirstTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
