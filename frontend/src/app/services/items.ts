import { Service, inject } from "@angular/core"
import { HttpClient } from "@angular/common/http"

@Service()
export class Items {
  private http = inject(HttpClient)

  getItems() {
    return this.http.get<{ items: any[] }>("https://localhost/items")
  }

  createItem(name: string, price: number, is_active: string) {
    return this.http.post("https://localhost/items", {
      name,
      price,
      is_active,
    })
  }

  updateItem(item: any) {
    return this.http.put(`https://localhost/items/${item.id}`, {
      name: item.name,
      price: item.price,
      is_active: item.is_active,
    })
  }
}
