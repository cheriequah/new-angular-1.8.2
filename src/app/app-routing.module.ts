import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { EventComponent } from './components/event/event.component';
import { ShowTicketInfoComponent } from './components/showticketinfo/showticketinfo.component';
import { TicketComponent } from './components/ticket/ticket.component';

const routes: Routes = [
  {
    path: '',
    component: EventComponent
  },
  {
    path: 'ticketbooking',
    component: TicketComponent
  },
  {
    path: 'ticketinfo',
    component: ShowTicketInfoComponent
  },
  {
    path: 'checkout/:id',
    component: CheckoutComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
