import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "app/models/cart.model";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
})
export class CartComponent {
  cart: Cart = {
    items: [
      {
        product: "https://via.placeholder.com/150",
        name: "Te regalo la lluvia",
        price: 20,
        quantity: 1,
        id: 2,
      },
      {
        product: "https://via.placeholder.com/150",
        name: "Arrasando",
        price: 22,
        quantity: 3,
        id: 1,
      },
    ],
  };

  dataSource: CartItem[] = [];
  displayedColumns: string[] = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: CartItem[]): number {
    return items
      .map((item: CartItem) => item.price * item.quantity)
      .reduce((prev, curr) => prev + curr, 0);
  }
}
