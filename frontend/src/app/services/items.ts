import { Service, inject } from "@angular/core"
import { HttpClient } from "@angular/common/http"

@Service()
export class Items {
  private http = inject(HttpClient)

  getItems() {
    return this.http.get<{ items: any[] }>(
      "https://special-goggles-rp7v44v5v76fp55r-3333.app.github.dev/items"
    )
  }

  createItem(name: string, price: number, is_active: string) {
    return this.http.post(
      "https://special-goggles-rp7v44v5v76fp55r-3333.app.github.dev/items",
      {
        name,
        price,
        is_active,
      }
    )
  }

  updateItem(item: any) {
    return this.http.put(
      `https://special-goggles-rp7v44v5v76fp55r-3333.app.github.dev/items/${item.id}`,
      {
        name: item.name,
        price: item.price,
        is_active: item.is_active,
      }
    )
  }
}
