import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public productList: any;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe((res) => {
      this.productList = res;
    });
  }
}
