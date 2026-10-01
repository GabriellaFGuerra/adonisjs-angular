import { Service, inject } from "@angular/core"
import { HttpClient } from "@angular/common/http"

@Service()
export class Customers {
  private http = inject(HttpClient)

  getCustomers() {
    return this.http.get<{ customers: any[] }>(
      "https://special-goggles-rp7v44v5v76fp55r-3333.app.github.dev/customers"
    )
  }

  createCustomer(name: string, phone: string) {
    return this.http.post(
      "https://special-goggles-rp7v44v5v76fp55r-3333.app.github.dev/customers",
      {
        name,
        phone,
      }
    )
  }

  updateCustomer(customer: any) {
    return this.http.put(
      `https://special-goggles-rp7v44v5v76fp55r-3333.app.github.dev/customers/${customer.id}`,
      {
        name: customer.name,
        phone: customer.phone,
      }
    )
  }
}
