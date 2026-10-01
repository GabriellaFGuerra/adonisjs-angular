import { Service, inject } from "@angular/core"
import { HttpClient } from "@angular/common/http"

@Service()
export class Orders {
  private http = inject(HttpClient)

  getOrders() {
    return this.http.get<{ orders: any[] }>(
      "https://special-goggles-rp7v44v5v76fp55r-3333.app.github.dev/orders"
    )
  }
  
}
