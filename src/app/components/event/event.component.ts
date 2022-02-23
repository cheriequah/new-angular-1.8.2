import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { EventModelServer } from 'src/app/model/event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  public name = "";
  events: EventModelServer[] = [
    {
      "id":1,
      "title":"Art Event Dance",
      "description":"Dance performance",
      "ticketBal":50,
      "price":0,
      "dateTime":"2022-02-18T14:14:06.000Z",
      "location":"Online",
      "image":"https://www.teamlab.art/images/pc-l/14591"
    },
    {
      "id":2,
      "title":"Art Event Dance",
      "description":"Dance performance",
      "ticketBal":50,
      "price":0,
      "dateTime":"2022-02-18T14:14:06.000Z",
      "location":"Online",
      "image":"https://www.teamlab.art/images/pc-l/14591"
    }
  ]
/*
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('ngOnInit')
    this.http.get('http://localhost:4200/load').subscribe((events: EventModelServer[]) => {
      console.log('res',events)
      this.events = events
    })
  }
  */
}