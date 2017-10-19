import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import {ServiceService} from '../service.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products = []; 
  
  constructor(private _serviceService: ServiceService) {this.products = this._serviceService.products; }

  ngOnInit() {
  }
  delete(product) {
    const idx = this.products.indexOf(product);
    this.products.splice(idx, 1);
    this._serviceService.show();
  }

}
