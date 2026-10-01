import { Service, inject } from "@angular/core"
import { HttpClient } from "@angular/common/http"

@Service()
export class Orders {
  private http = inject(HttpClient)

  getOrders() {
    return this.http.get<{ orders: any[] }>("https://localhost/orders")
  }

  getOrder(orderId: number) {
    return this.http.get<{ order: any }>(`https://localhost/orders/${orderId}`)
  }

  createOrder(customerId: number, items: any[]) {
    return this.http.post("https://localhost/orders", {
      customerId,
      status: "pendente",
      items,
    })
  }

  updateOrderStatus(orderId: number, status: string) {
    return this.http.put<{ order: any }>(
      `https://localhost/orders/${orderId}/status`,
      {
        status,
      }
    )
  }
}
