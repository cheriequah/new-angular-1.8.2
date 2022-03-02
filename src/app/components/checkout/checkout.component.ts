import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/service/event.service';
import { Event } from '../event/event';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  event: Event | undefined ;
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    
  ) {}

  ngOnInit(): void {
    this.getEvent();
  }
    
  getEvent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.eventService.getEvent(id)
    .subscribe(event => this.event = event);
    console.log(this.event)
  }

  count=1;

  minus()
  {
    if (this.count > 0){
      this.count = this.count - 1;
    }
  }

  add()
  {
    if (this.count < 50){
      this.count = this.count + 1;
    }
  }
}