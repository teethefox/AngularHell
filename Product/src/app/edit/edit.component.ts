import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
product;
products;
eyedee;
  constructor(  private _route: ActivatedRoute,  private _router: Router,   private _serviceService: ServiceService,
    
  ) {
    this.products = this._serviceService.show();
    this._route.params
    .subscribe( param => {
      for (let idx = 0; idx < this.products.length; idx++) {
        if (this.products[idx].id == param.id) {
          this.product = this.products[idx];
          this.eyedee=param.id;
          console.log(this.eyedee);
          
          break;
        }
      }
    });
  
  }
  ngOnInit() {
  }
edit(){
  this._router.navigate(['list']);
  
}
kill() {
    this.products.splice(this.product,1);
    this._router.navigate(['list']);
    
  }

}
