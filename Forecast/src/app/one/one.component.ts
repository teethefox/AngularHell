import { Component, OnInit } from '@angular/core';
import {ServiceService} from './../service.service';
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  weather;
  temp;
  maxTemp;
  minTemp;
  humidity;
  wind;
  cloudy;

  constructor(private _serviceService: ServiceService) { }

  ngOnInit() {
    this.weather = this._serviceService.getweather('sanjose')
    .then( weather => {
      console.log(weather)
      this.humidity = weather.main.humidity;
      this.temp = weather.main.temp;
      this.maxTemp = weather.main.temp_max;
      this.minTemp = weather.main.temp_min;
      this.cloudy = weather.weather[0].description;
      console.log(this.weather);
    });
  }

}
