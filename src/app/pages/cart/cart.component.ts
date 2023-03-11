import { Component } from "@angular/core";
import { Cart } from "app/models/cart.model";

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
}
