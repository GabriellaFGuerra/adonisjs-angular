import { Component, signal } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { Customers } from "./customers/customers"
import { Items } from "./items/items"
import { Orders } from "./orders/orders"

@Component({
  imports: [RouterOutlet, Customers, Items, Orders],
  selector: "app-root",
  styleUrl: "./app.css",
  templateUrl: "./app.html",
})
export class App {
  protected readonly title = signal("frontend")
}
