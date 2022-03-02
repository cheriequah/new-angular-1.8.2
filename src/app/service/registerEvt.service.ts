import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { response } from "express";
import { map } from "rxjs";


@Injectable({providedIn: 'root'})
  export class RegisterService {
      
    constructor(private httpclient: HttpClient){}

    url = "http://localhost:3000/addevent";
    rootUrl = "http://localhost:3000/";

    registerEvent(data: any) {
        return this.httpclient.post(this.rootUrl, data);
    }
/*
    //Register Event
    registerEvent(data) {
        return this.httpclient.post('http://localhost:3000/addevent', data).pipe(
            map((response) => {
                return response;
            })
        )
    }*/
  }