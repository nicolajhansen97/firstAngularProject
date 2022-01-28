import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Array<Product>;

  constructor() { 

    this.products = new Array();
    this.products.push(new Product(1,"Milk",12));
    this.products.push(new Product(2,"Coffee",20));
    this.products.push(new Product(3,"Coca Cola",15));
    this.products.push(new Product(4,"Snickers",14));
    this.products.push(new Product(5,"Mars",14));
  }

  placeBid(i:number): void {
    console.log("bid on item " +  this.products[i].name);
    this.products[i].price = this.products[i].price + 1;

  }

  ngOnInit(): void {
  }

}
