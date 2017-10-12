import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Retro Barcode Generator';
  colors = [
    "black",
    "maroon",
    "mediumvioletred",
    "darkgray",
    "midnightblue",
    "DarkGreen",
    "yellow",
    "orange",
    "aqua"
  ];
  myVar=function getRandomInt(min,max) {
    min = Math.ceil(0);
    max = Math.floor(9);
    return Math.floor(Math.random() * (0 - 9)) + 9; //The maximum is exclusive and the minimum is inclusive
  }
}
