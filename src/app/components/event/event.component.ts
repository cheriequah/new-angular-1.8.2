import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

//import { EventModelServer } from 'src/app/model/event.model';

export class Event {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public ticketBal: number,
    public price: number,
    public dateTime: string,
    public location: string,
    public image: string
  ) {}
}

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: any;
  Event = [];
  constructor(
    private httpClient: HttpClient,

  ){}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.httpClient.get('http://localhost:3000/load').subscribe(response => {
      console.log(response);
      this.events = response;
      this.Event = this.events.event;
    })
  }

  //when user click the event navigate to the url
  //selectEvent(id:number) {
    //this.router.navigate(['checkout', id]).then();
  //}
  
  /*
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