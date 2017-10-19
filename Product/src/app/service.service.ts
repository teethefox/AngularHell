import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import {Product} from './product';
import "rxjs";
@Injectable()
export class ServiceService {
products = [];
  constructor() { }
  
    updateProducts(product) {
      this.products.push(product);
      
    }
    show(){
      return this.products;
    }
}
