import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import "rxjs";
@Injectable()
export class ServiceService {
tasks=[];
  constructor(private _http: Http) { }
 getuser(username: string){
   if(username){
   return this._http.get(`https://api.github.com/users/${username}`)
      .map( data => data.json() )
      .toPromise();
    }
  }
}
