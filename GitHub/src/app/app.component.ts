import { Component } from '@angular/core';
import {ServiceService} from './service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  promise;
  exists= null;
  score = 0;
  username= null;

constructor(private _serviceService: ServiceService) {}
calcscore(){
  
this.promise= this._serviceService.getuser(this.username)
console.log(this.username);
if (this.promise){
  this.promise.then(
    (user) => {
      if(user.id){
        this.exists=true;
        this.score = user.followers + user.public_repos;
      }
        else{
          this.exists=false;
          this.score=0;
        }
        this.username = null;
        console.log(this.username)
      })
      .catch( (err) => {
        this.exists = false;
      });
    } else {
      this.exists = false;
    }
  }

}