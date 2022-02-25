/*export interface EventModelServer {
    id: number;
    title: string;
    description: string;
    ticketBal: number;
    price: number;
    dateTime: string;
    location: string;
    image: string;
  }
  
  export interface ServerResponse {
    //count: number;
    events: EventModelServer[];
  }
  */

import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, tap } from 'rxjs/operators';
//import { HEROES } from "../components/event/event";
import { Event } from "../components/event/event";

  @Injectable({providedIn: 'root'})
  export class EventService {
    events: any;
  Event = [];
  
  private eventDataUrl = 'http://localhost:3000/load';
    constructor (private httpclient: HttpClient) {}

    getEvent(id: number): Observable<Event> {
      const url = `${this.eventDataUrl}/${id}`;
      return this.httpclient.get<Event>(url).pipe(
        tap(_ =>console.log(`fetched event id=${id}`)),
        catchError(this.handleError<Event>(`getEvent id=${id}`))
        //this.httpclient.get('http://localhost:3000/load').subscribe(response => {
      //this.events = response; 
      //this.Event = this.events.event})
      //const event = this.Event.find(e => e.id === id)!;
      //return of(event);
      );
      
    }
    
   
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  }