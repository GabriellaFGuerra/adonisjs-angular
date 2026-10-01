import { Component, inject } from "@angular/core"
import { Customers as CustomersService } from "../services/customers"
import { FormsModule } from "@angular/forms"
@Component({
  imports: [FormsModule],
  selector: "app-customers",
  styleUrl: "./customers.css",
  templateUrl: "./customers.html",
})
export class Customers {
  private customersService = inject(CustomersService)

  customers: any[] = []

  name = ""
  phone = ""
  editingCustomerId: number | null = null

  constructor() {
    this.getCustomers()
  }

  getCustomers() {
    this.customersService.getCustomers().subscribe((customers) => {
      this.customers = customers.customers
    })
  }

  createCustomer() {
    this.customersService
      .createCustomer(this.name, this.phone)
      .subscribe(() => {
        this.name = ""
        this.phone = ""
        this.getCustomers()
      })
  }
  clearEdit() {
    this.editingCustomerId = null
    this.name = ""
    this.phone = ""
  }

  editCustomer(customer: any) {
    this.editingCustomerId = customer.id
    this.name = customer.name
    this.phone = customer.phone
  }

  updateCustomer() {
    if (this.editingCustomerId !== null) {
      const updatedCustomer = {
        id: this.editingCustomerId,
        name: this.name,
        phone: this.phone,
      }
      this.customersService.updateCustomer(updatedCustomer).subscribe(() => {
        this.clearEdit()
        this.getCustomers()
      })
    }
  }
}
