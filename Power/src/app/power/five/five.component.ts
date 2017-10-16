import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {
  @Input() power;
  
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.power = this.power * 250;
  }
}
