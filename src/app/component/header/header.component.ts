import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public totalItem: number = 0;
  constructor(private cartservice: CartService) {}

  ngOnInit(): void {
    this.cartservice.getProduct().subscribe((res) => {
      this.totalItem = res.length;
    });
  }
}
