import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import { Router } from '@angular/router';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  constructor(    private _router: Router,   private _serviceService: ServiceService,
    
  ) { }

  ngOnInit() {
  }
  product = new Product();
  products = [];
  create(formData){
    console.log(formData.form.value);
    this.product.title = formData.form.value.title;
    this.product.price = formData.form.value.price;
    this.product.image = formData.form.value.image; 
    this._serviceService.updateProducts(this.product);
    this._router.navigate(['/list']);
    
    console.log(this.product)
  }
}
