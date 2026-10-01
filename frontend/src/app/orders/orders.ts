import { Component, inject } from "@angular/core"
import { Orders as OrdersService } from "../services/orders"
import { Customers as CustomersService } from "../services/customers"
import { Items as ItemsService } from "../services/items"
import { FormsModule } from "@angular/forms"

@Component({
  imports: [FormsModule],
  selector: "app-orders",
  styleUrl: "./orders.css",
  templateUrl: "./orders.html",
})
export class Orders {
  private ordersService = inject(OrdersService)
  private customersService = inject(CustomersService)
  private itemsService = inject(ItemsService)

  orders: any[] = []
  customerId: number | null = null
  itemId: number | null = null
  quantity = 1
  orderItems: any[] = []
  customers: any[] = []
  items: any[] = []

  constructor() {
    this.getOrders()
    this.getCustomers()
    this.getItems()
  }

  getCustomers() {
    this.customersService.getCustomers().subscribe((response) => {
      this.customers = response.customers
    })
  }

  getItems() {
    this.itemsService.getItems().subscribe((response) => {
      this.items = response.items
    })
  }

  getOrders() {
    this.ordersService.getOrders().subscribe((orders) => {
      this.orders = orders.orders
    })
  }
}
