import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.css']
})
export class SixComponent implements OnInit {
  @Input() power;
  
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.power = this.power * 500;
  }

}
