import { Service, inject } from "@angular/core"
import { HttpClient } from "@angular/common/http"

@Service()
export class Customers {
  private http = inject(HttpClient)

  getCustomers() {
    return this.http.get<{ customers: any[] }>("https://localhost/customers")
  }

  createCustomer(name: string, phone: string) {
    return this.http.post("https://localhost/customers", {
      name,
      phone,
    })
  }

  updateCustomer(customer: any) {
    return this.http.put(`https://localhost/customers/${customer.id}`, {
      name: customer.name,
      phone: customer.phone,
    })
  }
}
