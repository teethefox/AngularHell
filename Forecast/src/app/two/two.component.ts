import { Component, OnInit } from '@angular/core';
import {ServiceService} from './../service.service';
@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  weather;
  temp;
  maxTemp;
  minTemp;
  humidity;
  wind;
  clouds;

  constructor(private _serviceService: ServiceService) { }

  ngOnInit() {
    this.weather = this._serviceService.getweather('washingtondc')
    .then( weather => {
      console.log(weather)
      this.humidity = weather.main.humidity;
      this.temp = weather.main.temp;
      this.maxTemp = weather.main.temp_max; 
      this.minTemp = weather.main.temp_min;
      this.clouds = weather.weather[0].description;
      console.log(this.weather);
    });
  }

}