import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { EventComponent } from './components/event/event.component';
import { FirstTimeComponent } from './components/register1sttimepayment/register1sttimepayment.component';
import { ShowTicketInfoComponent } from './components/showticketinfo/showticketinfo.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: EventComponent
  },
  {
    path: 'registerevent',
    component: RegisterComponent
  },
  {
    path: 'ticketinfo',
    component: ShowTicketInfoComponent
  },
  {
    path: 'checkout/:id',
    component: CheckoutComponent
  },
  {
    path: 'registerfirsttime',
    component: FirstTimeComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
