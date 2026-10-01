import { Component, inject, signal } from "@angular/core"
import { DatePipe, DecimalPipe } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { RouterLink } from "@angular/router"

import { Orders as OrdersService } from "../services/orders"
import { Customers as CustomersService } from "../services/customers"
import { Items as ItemsService } from "../services/items"

@Component({
  selector: "app-orders",
  imports: [FormsModule, DatePipe, DecimalPipe, RouterLink],
  templateUrl: "./orders.html",
  styleUrl: "./orders.css",
})
export class Orders {
  private ordersService = inject(OrdersService)
  private customersService = inject(CustomersService)
  private itemsService = inject(ItemsService)

  orders = signal<any[]>([])
  customers = signal<any[]>([])
  items = signal<any[]>([])

  showNewOrder = false

  customerId: number | null = null
  itemId: number | null = null
  quantity = 1

  orderItems: any[] = []

  constructor() {
    this.getOrders()
    this.getCustomers()
    this.getItems()
  }

  getOrders() {
    this.ordersService.getOrders().subscribe((response) => {
      this.orders.set(response.orders)
    })
  }

  getCustomers() {
    this.customersService.getCustomers().subscribe((response) => {
      this.customers.set(response.customers)
    })
  }

  getItems() {
    this.itemsService.getItems().subscribe((response) => {
      this.items.set(response.items)
    })
  }

  getItem(itemId: number) {
    return this.items().find((item) => item.id === itemId)
  }

  addItem() {
    if (this.itemId === null) {
      alert("Selecione um item")
      return
    }

    if (this.quantity < 1) {
      alert("A quantidade deve ser pelo menos 1")
      return
    }

    this.orderItems.push({
      itemId: this.itemId,
      quantity: this.quantity,
    })

    this.itemId = null
    this.quantity = 1
  }

  removeItem(index: number) {
    this.orderItems.splice(index, 1)
  }

  getTotal() {
    return this.orderItems.reduce((total, orderItem) => {
      const item = this.getItem(orderItem.itemId)

      return total + (item?.price || 0) * orderItem.quantity
    }, 0)
  }

  openNewOrder() {
    this.showNewOrder = true
  }

  cancelNewOrder() {
    this.showNewOrder = false
    this.customerId = null
    this.itemId = null
    this.quantity = 1
    this.orderItems = []
  }

  createOrder() {
    if (this.customerId === null) {
      alert("Selecione um cliente")
      return
    }

    if (this.orderItems.length === 0) {
      alert("Adicione pelo menos um item")
      return
    }

    this.ordersService.createOrder(this.customerId, this.orderItems).subscribe({
      next: () => {
        alert("Pedido criado com sucesso!")

        this.cancelNewOrder()
        this.getOrders()
      },

      error: (error) => {
        alert(error.error?.error || "Erro ao criar pedido")
      },
    })
  }

  updateOrderStatus(orderId: number, status: string) {
    this.ordersService.updateOrderStatus(orderId, status).subscribe({
      next: () => {
        this.getOrders()
      },

      error: (error) => {
        alert(error.error?.error || "Não foi possível alterar o status")

        this.getOrders()
      },
    })
  }
}
