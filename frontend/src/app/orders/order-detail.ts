import { Component, inject, signal } from "@angular/core"
import { DatePipe, DecimalPipe } from "@angular/common"
import { ActivatedRoute, Router } from "@angular/router"
import { FormsModule } from "@angular/forms"

import { Orders as OrdersService } from "../services/orders"

@Component({
  selector: "app-order-detail",
  imports: [FormsModule, DatePipe, DecimalPipe],
  templateUrl: "./order-detail.html",
  styleUrl: "./orders.css",
})
export class OrderDetail {
  private ordersService = inject(OrdersService)
  private route = inject(ActivatedRoute)
  private router = inject(Router)

  order = signal<any | null>(null)

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get("id"))

    this.getOrder(id)
  }

  getOrder(id: number) {
    this.ordersService.getOrder(id).subscribe({
      next: (response) => {
        this.order.set(response.order)
      },

      error: () => {
        alert("Pedido não encontrado")
        this.router.navigate(["/orders"])
      },
    })
  }

  updateStatus(status: string) {
    const currentOrder = this.order()

    if (!currentOrder) {
      return
    }

    this.ordersService.updateOrderStatus(currentOrder.id, status).subscribe({
      next: (response) => {
        this.order.set(response.order)
      },

      error: (error) => {
        alert(error.error?.error || "Não foi possível alterar o status")

        this.getOrder(currentOrder.id)
      },
    })
  }

  back() {
    this.router.navigate(["/orders"])
  }
}
