import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import "rxjs";
@Injectable()
export class ServiceService {
tasks=[];
  constructor(private _http: Http) { }
 getweather(city: string){
   let myKey: any = `710a4fdf3d53f75640569b80d9fabba5`;
  
   return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${myKey}`)
      .map( data => data.json() )
      .toPromise();
  }
}
